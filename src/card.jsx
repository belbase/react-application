import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Card extends Component {
  constructor(props) {
    super(props);
    const data = this.props.data;
    this.state = { data: data };
    this.deleteCon = this.deleteCon.bind(this);
  }

  deleteCon = async event => {
    event.preventDefault();
    this.props.dispatch({
      type: "DELETE_EMPLOYEE",
      id: this.state.data.id
    });
  };

  render() {
    const { data } = this.state;
    return (
      <Fragment>
        <div className="card card-h" style={{ width: "18rem" }}>
          <div className="card-body">
            <span className="pull-right clickable close-icon">
              <span className="badge badge-pill badge-warning">
                <i className="fa fa-pencil" />
              </span>{" "}
              &nbsp;
              <button
                className="btn badge badge-pill badge-danger"
                onClick={this.deleteCon}
              >
                <i className="fa fa-times" />
              </button>
            </span>
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

export default connect()(Card);
