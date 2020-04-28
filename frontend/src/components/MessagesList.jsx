import React from "react";

import Message from "./Message";

export default function MessagesList({ messages, currentUser }) {
  return (
    <>
      {messages.map((msg, i) => (
        <Message
          key={msg._id || i}
          user={msg.user}
          date={msg.createdAt || Date.now()}
          message={msg.message}
          currentUser={currentUser}
        />
      ))}
    </>
  );
}
