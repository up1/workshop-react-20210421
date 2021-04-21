import { Component, useState } from "react";
import Clock from "./components/Clock";
import Form from "./components/Form";
import User from "./components/User";

const App = () => {
  const users = [
    { id: 1, name: "User 01", age: 10 },
    { id: 2, name: "User 02", age: 20 },
    { id: 3, name: "User 03", age: 30 },
  ];

  // State
  const [message, setMessage] = useState("-------");

  // Callback
  const xyz = (input) => {
    setMessage("New section : " + input);
  };

  return (
    <div>
      <User users={users} />
      <Clock title="Current data naja = " />
      <Form onSayHi={xyz} />
      <p>{message}</p>
    </div>
  );
};

export default App;
