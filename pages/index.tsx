import React, { useEffect, useState } from "react";

const BroadcastChannelExample = () => {
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const broadcastChannel = new BroadcastChannel("myChannel");

    broadcastChannel.onmessage = (event) => {
      setMessage(event.data);
    };
    // @ts-ignore
    setChannel(broadcastChannel);

    return () => {
      broadcastChannel.close();
    };
    // @ts-ignore
  }, []);

  const sendMessage = () => {
    if (channel) {
      // @ts-ignore
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
