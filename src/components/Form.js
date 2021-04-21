// function User(props) {
//   return <li>{props.info}</li>;
// }

import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { data: "" };
    this.doKey = this.doKey.bind(this);
  }

  doKey(event) {
    this.setState({ data: this.state.data + event.key });
  }

  render() {
    return (
      <div>
        <input type="text" onKeyPress={this.doKey} />
        <p>Hello : {this.state.data}</p>
      </div>
    );
  }
}

export default Form;
