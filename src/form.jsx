import React from "react";

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
    this.formValidation(event.target.name, event.target.value);
  }

  formValidation(name, value) {
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
  }
  render() {
    const { person, form } = this.state;
    return (
      <React.Fragment>
        <div className="col-12 col-md-6">
          <form onSubmit={this.formSubmit.bind(this)}>
            <div class="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={
                  form.name.status != false
                    ? "form-control"
                    : "form-control is-invalid"
                }
                name="name"
                id="name"
                onChange={this.inputChange.bind(this)}
                value={person.name}
                placeholder="Enter the Name"
              />
              <div className="invalid-feedback">{form.name.message}</div>
            </div>
            <div class="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className={
                  form.age.status != false
                    ? "form-control"
                    : "form-control is-invalid"
                }
                name="age"
                id="age"
                onChange={this.inputChange.bind(this)}
                value={person.age}
                placeholder="Enter the Age"
              />
              <div className="invalid-feedback">{form.age.message}</div>
            </div>
            <div class="form-group">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                className={
                  form.designation.status != false
                    ? "form-control"
                    : "form-control is-invalid"
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
              className="btn btn-primary"
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

export default Form;
