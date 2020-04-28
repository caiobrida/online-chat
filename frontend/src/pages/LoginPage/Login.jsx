import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { userAdded } from "../../store/user";

import Form from "../../components/Form";

import "./styles.css";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name) {
      dispatch(userAdded({ name }));
      history.push("/dashboard");
    }
  }

  const inputs = [
    {
      id: 1,
      value: name,
      label: "Username",
      handleChange: setName,
    },
  ];

  const buttons = [
    {
      id: 1,
      label: "Chat!",
    },
  ];

  return (
    <div id="loginForm">
      <Form
        title="LOGIN"
        handleSubmit={handleSubmit}
        inputs={inputs}
        buttons={buttons}
      />
    </div>
  );
}
