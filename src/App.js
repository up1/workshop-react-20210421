import { Component } from "react";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <User info="User 01" />
          <User info="User 02" />
          <User info="User 03" />
        </ul>
      </div>
    );
  }
}

export default App;
