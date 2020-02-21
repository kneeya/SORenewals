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
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    // this.checkvoice = this.checkvoice.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    email: "",
    voice: "",
    voicedisabled: true,
    emaildisabled: true
  };

  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  checkvoice() {
    var regex = /^[(]?\d{3}[)]?[ -.]?\d{3}[ -.]?\d{4}$/;
    var match = regex.exec(this.state.voice);
    if (this.props.hc) {
      if (match) {
        this.setState({ voicedisabled: false, voicefail: false });
      } else {
        this.setState({ voicedisabled: true, voicefail: true });
      }
    } else {
      this.setState({ voicedisabled: false, voicefail: false });
    }
  }

  checkemail() {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var match = regex.exec(this.state.email);
    if (match) {
      this.setState({ emaildisabled: false, emailfail: false });
    } else {
      this.setState({ emaildisabled: true, emailfail: true });
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
      this.handleSubmit();
    }, 0.001);
  }
  onSubmit() {
    this.checkemail();
    this.checkvoice();
  }

  handleSubmit = () => {
    if (this.props.hc) {
      if (!this.state.emaildisabled && !this.state.voicedisabled) {
        //sending email and phone number to app.js to use in notify and review details page
        this.props.sendContact(this.state.email, this.state.voice);
        this.props.history.push("/notify-so");
        console.log("sent");
      }
    } else if (!this.state.emaildisabled) {
      this.props.sendContact(this.state.email, this.state.voice);
      this.props.history.push("/notify-so");
      console.log("sent");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div class="landing-body">
          <Back onClick={this.goBack} />
          {this.state.voicefail && this.state.emailfail ? (
            <Error
              id1="#email"
              id2="#phonenumber"
              bul1="Email"
              bul2="Phone number"
            />
          ) : this.state.emailfail && !this.state.voicefail ? (
            <Error id1="#email" bul1="Email" />
          ) : this.state.voicefail && !this.state.emailfail ? (
            <Error id1="#phonenumber" bul1="Phone number" />
          ) : (
            ""
          )}
          <div className={this.state.emailfail ? "error-content" : ""}>
            <h3>Contact information</h3>
            <p>Enter your contact information below</p>

            <div class="section">
              <div id="email" style={{ marginBottom: "1rem" }}>
                <strong style={{ paddingRight: 50 }}>Email</strong>
              </div>

              {this.state.emailfail ? (
                <div>
                  <ErrorMsg msg="" />
                  <p class="weird-one-line-err">Please provide a valid email</p>
                </div>
              ) : (
                ""
              )}
              <p>For example odslab@ontario.ca</p>
<<<<<<< HEAD

=======
>>>>>>> ce1a44b742d72a8f19d4160fb8900d56fa2926e6
              <input
                class="form-group"
                ref={input => (this.email = input)}
                onChange={() => {
                  let temp = this.email;
                  temp = this.email.value;
                  this.setState({ email: temp });
                }}
                //onBlur={() => this.checkemail()}
              />

              <p style={{ marginBottom: "-1rem" }}>
                We will email you an electronic receipt and temporary
                document(s) for this transaction.
              </p>
              <br></br>
            </div>
          </div>
          <div className={this.state.voicefail ? "error-content" : ""}>
            <div class="section">
              <div id="phonenumber" style={{ marginBottom: "1rem" }}>
                <strong>
                  Phone number {!this.props.hc ? "(optional)" : ""}
                </strong>
              </div>
              {this.state.voicefail ? (
                <ErrorMsg msg="Please provide a phone number" />
              ) : (
                ""
              )}
              <p>For example 226 808 3813</p>

              <input
                class="form-group"
                id="voicey"
                ref={input => (this.voicey = input)}
                onChange={() => {
                  let temp = this.voicey;
                  temp = this.voicey.value;
                  this.setState({ voice: temp });
                }}
                //onBlur={() => this.checkvoice()}
              />
              <p>
                We may call you to confirm that you live in Ontario, or to
                resolve an issue with your renewal.{" "}
                {this.props.hc ? (
                  <strong>
                    If contacted by ServiceOntario, you have 30 days to respond
                    to keep your health coverage.
                  </strong>
                ) : (
                  ""
                )}
              </p>
            </div>
            <Button onClick={() => this.onSubmit()}>Next</Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Contact);
