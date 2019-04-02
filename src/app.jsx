import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h1>This is Heading</h1>
        <p>
          {this.props.children ? this.props.children : "This is the passage."}
        </p>
      </React.Fragment>
    );
  }
}

export default App;
