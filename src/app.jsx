import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <hr />
        <div className="col-md-6 col-12">
          <p className="mt-5">
            {this.props.children ? this.props.children : "This is the passage."}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
