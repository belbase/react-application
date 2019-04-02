import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Form from "./form";

import "./styles.css";

class Appication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "_______",
        age: "___",
        designation: "______________"
      }
    };
    this.getData = this.getData.bind(this);
  }

  getData(person) {
    this.setState(person);
  }

  render() {
    const { person } = this.state;
    return (
      <div className="App">
        <Form onSubmitData={this.getData} />
        <App>
          My name is {person.name} <br />
          My Age is {person.age} years old. <br />
          My Designation is {person.designation}
        </App>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Appication />, rootElement);
