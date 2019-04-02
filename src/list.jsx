import React from "react";
import axios from "axios";

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
      <div>
        <h3>Title</h3>
        <ul>
          {this.state.people.map(function(item) {
            return <li>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
