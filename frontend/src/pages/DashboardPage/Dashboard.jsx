import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";

import {
  loadMessages,
  addMessage,
  addMessageToArray,
} from "../../store/messages";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import MessagesList from "../../components/MessagesList";

import "./styles.css";

let socket;

export default function Dashboard() {
  const messages = useSelector((state) => state.entities.messages.list);
  const user = useSelector((state) => state.entities.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [message, setMessage] = useState("");

  useEffect(() => {
    socket = io("http://localhost:3333");

    socket.on("messageReceived", (data) => {
      dispatch(addMessageToArray(data));
    });

    return function clean() {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!user.name) history.push("/login");
    dispatch(loadMessages());
  }, []);

  function handleClick(msg, socket) {
    dispatch(addMessageToArray(msg));
    dispatch(addMessage(msg));
    socket.emit("messageSend", msg);

    setMessage("");
  }

  return (
    <div id="dashboard">
      <Header user={user.name} />
      <section>
        <div id="chat">
          <div id="messagesArea">
            <MessagesList currentUser={user} messages={messages} />
          </div>
        </div>
        <div id="sendMessagesArea">
          <Input
            placeholder="Write your messages here"
            value={message}
            handleChange={setMessage}
          />
          <Button
            type="button"
            onClick={() =>
              handleClick(
                {
                  user: user.name,
                  message,
                  createdAt: Date.now(),
                },
                socket
              )
            }
            label="Send"
          />
        </div>
      </section>
    </div>
  );
}
