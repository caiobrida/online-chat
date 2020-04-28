import React from "react";

import Button from "./Button";
import Input from "./Input";

export default function Form({
  handleSubmit,
  title,
  inputs = [],
  buttons = [],
}) {
  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {inputs.map((input) => (
        <Input
          key={input.id}
          type={input.type}
          value={input.value}
          classes={input.classes}
          label={input.label}
          handleChange={input.handleChange}
        />
      ))}
      {buttons.map((button) => (
        <Button key={button.id} classes={button.classes} label={button.label} />
      ))}
    </form>
  );
}
