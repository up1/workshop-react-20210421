// function User(props) {
//   return <li>{props.info}</li>;
// }

import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { data: "" };
    this.doKey1 = this.doKey.bind(this);
  }

  doKey(event) {
    this.setState({ data: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.doKey1} />
        <p>Hello : {this.state.data}</p>
      </div>
    );
  }
}

export default Form;
