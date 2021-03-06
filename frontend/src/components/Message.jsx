import React from "react";

function getParsedDate(date) {
  let day = date.getDate();
  if (day < 10) day = `0${day}`;

  let month = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;

  let year = date.getFullYear();

  let hour = date.getHours();

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  return {
    date: `${day}/${month}/${year}`,
    hours: `${hour}:${minutes}`,
  };
}

const currentUserStyle = {
  color: "#0f0",
};

export default function Message({ date, user, message, currentUser }) {
  const { date: msgDate, hours: msgHours } = getParsedDate(new Date(date));
  return (
    <p>
      <span
        style={currentUser.name === user ? currentUserStyle : null}
      >{`${msgDate} - ${user} - ${msgHours} => `}</span>
      {message}
    </p>
  );
}
