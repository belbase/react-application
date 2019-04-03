import React from "react";
import axios from "axios";
import Card from "./card";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
  }

  componentDidMount = async () => {
    this.fetchFromAPI();
  };

  fetchFromAPI = async () => {
    let { people } = this.state;

    await axios
      .get("/data.json")
      .then(response => {
        people = response.data;
        this.setState({ people: people });
      })
      .catch(exception => {
        console.log(exception);
      });
  };

  render() {
    console.dir(this.state.people);
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
        {this.state.people.map(function(item, i) {
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

export default List;
