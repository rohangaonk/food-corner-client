import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import io from "socket.io-client";

function Tester() {
  const mainRef = useRef(null);
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  const sendMessage = () => {
    socketRef.current.emit("message", msg);
    setMsg("");
  };

  const scrollToLastMessage = () => {
    const lastChild = mainRef.current.lastElementChild;
    lastChild.scrollIntoView({
      block: "end",
      inline: "nearest",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const socket = io.connect("ws://localhost:5000");
    socket.on("message", (data) => {
      flushSync(() => {
        setMessages((prev) => [...prev, data]);
      });
      scrollToLastMessage();
    });

    socketRef.current = socket;

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <div ref={mainRef} className="overflow-auto max-h-96 px-2">
        {messages.map((message, i) => {
          return (
            <div key={i} className={`w-full bg-pink-200 my-4`}>
              <h1 className={`text-font-20`} style={{ color: message.color }}>
                {message.user}
              </h1>
              <p>{message.message}</p>
            </div>
          );
        })}
      </div>
      <input
        className="border-2 m-2 p-2"
        value={msg}
        type="text"
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Send your text"
      />
      <button className="bg-blue-400 p-2" onClick={sendMessage}>
        send
      </button>
    </div>
  );
}

export default Tester;
