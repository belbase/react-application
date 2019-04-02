import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <hr />
        <div class="col-md-6 col-12">
          <p>
            {this.props.children ? this.props.children : "This is the passage."}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
