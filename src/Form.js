import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as emailjs from "emailjs-com";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class Email extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    email: ""
  };
  handleSubmit(e) {
    // e.preventDefault();
    const { email } = this.state;
    let templateParams = {
      to_name: email
    };
    if (email !== "") {
      emailjs.send(
        "gmail",
        "template_RLG3E76r",
        templateParams,
        "user_u3p3HFlbdGyXe6PNlzFis"
      );
    }
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="formBasicEmail">
            <Input
              type="email"
              name="email"
              value={this.state.email}
              className="text-primary"
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Enter email"
            />
          </FormGroup>
          <p>
            We will email you an electronic receipt and temporary docuemnt(s)
            for this transaction.
          </p>
          {/* <Link to="/notify-so">
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleSubmit()}
            >
              Next
            </Button>
          </Link> */}
          <Link to="/notify-so">
            <Button>Next</Button>
          </Link>
        </Form>
      </>
    );
  }
}
export default Email;
