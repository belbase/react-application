import React from "react";
import { connect } from "react-redux";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "",
        age: "",
        designation: ""
      },
      form: {
        name: {
          status: null,
          message: ""
        },
        age: {
          status: null,
          message: ""
        },
        designation: {
          status: null,
          message: ""
        },
        status: false
      }
    };
  }
  componentDidMount = () => {};

  formSubmit = async event => {
    event.preventDefault();
    let { person } = this.state;
    this.props.dispatch({
      type: "ADD_EMPLOYEE",
      data: person
    });

    person = {
      name: "",
      age: "",
      designation: ""
    };
    this.setState({ person: person });
  };

  inputChange = async event => {
    const { person } = this.state;
    person[event.target.name] = event.target.value;
    this.setState({ person });
    this.formValidation(event.target.name, event.target.value);
  };

  formValidation = async (name, value) => {
    const { form } = this.state;
    switch (name) {
      case "name":
        form.name.status = value.length > 3;
        form.name.message = form.name.status
          ? ""
          : "The Name Should be atleast 3 Character Long";
        break;
      case "age":
        form.age.status = value >= 18;
        form.age.message = form.age.status ? "" : "Person Should be An Adult ";
        break;
      case "designation":
        form.designation.status = value.length > 6;
        form.designation.message = form.designation.status
          ? ""
          : "The Designation Should be atleast 6 Character Long";
        break;
    }
    form.status =
      form.name.status && form.age.status && form.designation.status;
    this.setState({ form: form });
  };
  render() {
    const { person, form } = this.state;
    return (
      <React.Fragment>
        <div className="col-12 col-md-6 main-body">
          <form onSubmit={this.formSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={
                  form.name.status == null
                    ? "form-control"
                    : form.name.status == false
                    ? "form-control is-invalid"
                    : "form-control is-valid"
                }
                name="name"
                id="name"
                onChange={this.inputChange.bind(this)}
                value={person.name}
                placeholder="Enter the Name"
              />
              <div className="invalid-feedback">{form.name.message}</div>
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className={
                  form.age.status == null
                    ? "form-control"
                    : form.age.status == false
                    ? "form-control is-invalid"
                    : "form-control is-valid"
                }
                name="age"
                id="age"
                onChange={this.inputChange.bind(this)}
                value={person.age}
                placeholder="Enter the Age"
              />
              <div className="invalid-feedback">{form.age.message}</div>
            </div>
            <div className="form-group">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                className={
                  form.designation.status == null
                    ? "form-control"
                    : form.designation.status == false
                    ? "form-control is-invalid"
                    : "form-control is-valid"
                }
                name="designation"
                id="designation"
                onChange={this.inputChange.bind(this)}
                value={person.designation}
                placeholder="Enter the Designation"
              />
              <div className="invalid-feedback">{form.designation.message}</div>
            </div>
            <button
              className="btn btn-outline-success"
              type="submit"
              disabled={!form.status}
              title="Please Fill All the Field to Enable it"
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(Form);
