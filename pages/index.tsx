import React, { useEffect, useState } from "react";

const BroadcastChannelExample = () => {
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const broadcastChannel = new BroadcastChannel("myChannel");

    broadcastChannel.onmessage = (event) => {
      setMessage(event.data);
    };

    setChannel(broadcastChannel);

    return () => {
      broadcastChannel.close();
    };
  }, []);

  const sendMessage = () => {
    if (channel) {
      channel.postMessage("Hello from React!");
    }
  };

  return (
    <div>
      <h1>BroadcastChannel Example</h1>
      <button onClick={sendMessage}>Send Message</button>
      <p>Received Message: {message}</p>
    </div>
  );
};

export default BroadcastChannelExample;
