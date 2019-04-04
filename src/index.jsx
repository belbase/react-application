import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";
import List from "./list";
import { createStore } from "redux";
import EmployeeReducer from "./reducers/employee_reducer";
import { Provider } from "react-redux";

import "./styles.css";

const store = createStore(EmployeeReducer);

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
    this.setState({ person: person });
  }

  render() {
    // const { person } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <List />
          <Form onSubmitData={this.getData} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Appication />
  </Provider>,
  rootElement
);
