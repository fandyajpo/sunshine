// import React, { useEffect, useRef, useState } from "react";

// const BroadcastChannelExample = () => {
//   const [message, setMessage] = useState("");
//   const [channel, setChannel] = useState(null);
//   const ref = useRef();

//   useEffect(() => {
//     const broadcastChannel = new BroadcastChannel("myChannel");

//     broadcastChannel.onmessage = (event) => {
//       setMessage(event.data);
//     };
//     // @ts-ignore
//     setChannel(broadcastChannel);

//     return () => {
//       broadcastChannel.close();
//     };
//     // @ts-ignore
//   }, []);

//   const sendMessage = () => {
//     if (channel) {
//       // @ts-ignore
//       channel.postMessage("Hello from React!");
//     }
//   };

//   return (
//     <div>
//       <button
//         id="button"
//         onClick={() => window.open("localhost:3000", "_blank")}
//       >
//         cas
//       </button>
//       <h1>BroadcastChannel Example</h1>
//       <button onClick={sendMessage}>Send Message</button>
//       <p>Received Message: {message}</p>
//     </div>
//   );
// };

// export default BroadcastChannelExample;
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function App() {
  const router = useRouter();
  useEffect(() => {
    const openMultipleTabs = () => {
      setTimeout(() => {
        window.open(router.pathname, "_blank");
      }, 100); // Delay between each tab in milliseconds (e.g., 500ms)
    };

    openMultipleTabs();
  }, []);

  return (
    <div>
      <h1>My App</h1>
      {/* Your component's content */}
    </div>
  );
}

export default App;
