import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "",
        age: 0,
        designation: ""
      }
    };
  }
  componentDidMount() {}

  formSubmit(event) {
    event.preventDefault();
    const person = this.state;
    this.props.onSubmitData(person);
  }

  inputChange(event) {
    const { person } = this.state;
    person[event.target.name] = event.target.value;
    this.setState(person);
  }
  render() {
    const person = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <form onSubmit={this.formSubmit.bind(this)}>
                <div class="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    onChange={this.inputChange.bind(this)}
                    value={person.name}
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="name">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    name="age"
                    id="age"
                    onChange={this.inputChange.bind(this)}
                    value={person.age}
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="name">Designamtion</label>
                  <input
                    type="text"
                    className="form-control"
                    name="designation"
                    id="designation"
                    onChange={this.inputChange.bind(this)}
                    value={person.designation}
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
