import { Component } from "react";
import Clock from "./components/Clock";
import Form from "./components/Form";
import User from "./components/User";

class App extends Component {
  users = [
    { id: 1, name: "User 01", age: 10 },
    { id: 2, name: "User 02", age: 20 },
    { id: 3, name: "User 03", age: 30 },
  ];

  render() {
    return (
      <div>
        <User users={this.users} />
        <Clock title="Current data naja = " />
        <Form />
      </div>
    );
  }
}

export default App;
