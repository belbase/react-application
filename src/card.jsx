import React, { Component, Fragment } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    let data = this.props.data;
    console.log(this.props);
    this.state = { data: data };
  }
  render() {
    const { data } = this.state;
    return (
      <Fragment>
        <div className="card card-h" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">
              Age : {data.age} <br />
              Designation : {data.designation}
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
