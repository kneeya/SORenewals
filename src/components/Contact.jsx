import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Button, Col } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Email from "../Form.js";
import * as emailjs from "emailjs-com";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class Contact extends Component {
  state = {
    email: "",
    number: "",
    voice: "",
    voicedisabled: false
  };
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.checkvoice = this.checkvoice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }

  handleSubmit(e) {
    // const { email } = this.state;
    // let templateParams = {
    //   to_name: email
    // };
    // emailjs.send(
    //   "gmail",
    //   "template_RLG3E76r",
    //   templateParams,
    //   "user_u3p3HFlbdGyXe6PNlzFis"
    // );
  }
  sendEmail(email, e) {
    if (email !== "") {
      this.handleSubmit(e);
    }
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
    if (this.state.email) {
      this.setState({ emailfail: false });
    }
  };

  componentDidMount() {
    this.checkvoice();
  }
  onSubmit() {
    if (this.state.voicedisabled && this.props.showhc) {
      this.setState({ voicefail: true });
    } else {
      this.setState({ voicefail: false });
    }

    if (!this.state.email) {
      this.setState({ emailfail: true });
    } else {
      this.setState({ emialfail: false });
    }
    //sending email and phone number to app.js to use in notify and review details page
    this.props.sendEmail(this.state.email, this.state.voice);
  }
  checkvoice() {
    var regex = /^[(]?\d{3}[)]?[ -]?\d{3}[ -]?\d{4}$/;
    var match = regex.exec(this.state.voice);
    if (this.props.showhc) {
      if (match) {
        this.setState({ voicedisabled: false, voicefail: false });
      } else {
        this.setState({ voicedisabled: true });
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        {this.state.voicefail && this.state.emailfail ? (
          <Error bul1="Phone number" bul2="Email" />
        ) : this.state.emailfail && !this.state.voicefail ? (
          <Error bul1="Email" />
        ) : this.state.voicefail && !this.state.emailfail ? (
          <Error bul1="Phone number" />
        ) : (
          ""
        )}
        <Container className={this.state.voicefail ? "error-content" : ""}>
          <Row>
            <h2 className="sub-header">Contact information</h2>
          </Row>
          <Row>
            <p>Enter your contact information below</p>
          </Row>
          <Row>
            <Col>
              <strong>
                Phone number {!this.props.showhc ? "(optional)" : ""}
              </strong>
              {this.state.voicefail ? (
                <ErrorMsg msg="Please provide a phone number" />
              ) : (
                ""
              )}
              <p>For example 5194562343</p>

              <input
                id="voicey"
                ref={input => (this.voicey = input)}
                onChange={() => {
                  let temp = this.voicey;
                  temp = this.voicey.value;
                  this.setState({ voice: temp });
                }}
                onBlur={() => this.checkvoice()}
              />
              <p>
                We may call you to confirm that you live in Ontario, or to
                resolve an issue with your renewal.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className={this.state.emailfail ? "error-content" : ""}>
          <strong>Email</strong>
          {this.state.emailfail ? (
            <ErrorMsg msg="Please provide an email" />
          ) : (
            ""
          )}
          <p> For example person@example.com</p>

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
              We will email you an electronic receipt and temporary document(s)
              for this transaction.
            </p>
            {(this.state.voicedisabled && this.props.showhc) ||
            !this.state.email ? (
              <Button onClick={() => this.onSubmit()}>Next</Button>
            ) : (
              <Link to="/notify-so">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.sendEmail()}
                >
                  Next
                </Button>
              </Link>
            )}
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Contact);