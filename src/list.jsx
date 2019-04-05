import React from "react";
import axios from "axios";
import Card from "./card";
import { connect } from "react-redux";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
    // this.deleteData = this.deleteData.bind(this);
  }

  componentDidMount = async () => {
    this.fetchFromAPI();
  };

  fetchFromAPI = async () => {
    await axios
      .get("/data.json")
      .then(response => {
        this.props.dispatch({
          type: "FETCH_EMPLOYEE",
          data: response.data
        });
      })
      .catch(exception => {
        console.log(exception);
      });
  };

  render() {
    return (
      <div className="list-troll">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              List{" "}
              <button className="btn btn-primary float-right">
                <i className="fa fa-plus" /> Add
              </button>
            </h5>
            <p className="card-text" />
          </div>
        </div>
        {this.props.people.map(function(item, i) {
          try {
            return <Card data={item} key={i} />;
          } catch (error) {
            console.log(error);
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state
  };
};

export default connect(mapStateToProps)(List);
