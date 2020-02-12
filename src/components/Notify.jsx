import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Button, Col } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";

import AppStyles from "../App.css";

class Notify extends Component {
  state = {
    voicedisabled: false,
    fail: false
  };
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  state = {
    emailcheck: false,
    smscheck: false,
    voicecheck: false,
    email: this.props.email,
    phone: this.props.phone,
    voice: this.props.phone
  };
  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ email: value });
  };
  handlePChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ phone: value });
  };
  handleVChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ voice: value });
  };
  handleEmailChecked() {
    //show email input on click
    let emailcheck = !this.state.emailcheck;
    this.setState({ emailcheck });
  }
  handleSmsChecked() {
    //show txt msg input on click
    let smscheck = !this.state.smscheck;
    this.setState({ smscheck });
  }
  handleVoiceChecked() {
    //show phone call input on click
    let voicecheck = !this.state.voicecheck;
    this.setState({ voicecheck });
  }
  onSubmit = () => {
    let none = "";
    if (this.state.emailcheck && this.state.smscheck && this.state.voicecheck) {
      this.props.sendRContact(
        this.state.email,
        this.state.phone,
        this.state.voice
      );
    }
    if (
      this.state.emailcheck &&
      !this.state.smscheck &&
      !this.state.voicecheck
    ) {
      this.props.sendRContact(this.state.email, none, none);
    }
    if (
      !this.state.emailcheck &&
      this.state.smscheck &&
      !this.state.voicecheck
    ) {
      this.props.sendRContact(none, this.state.phone, none);
    }
    if (
      !this.state.emailcheck &&
      !this.state.smscheck &&
      this.state.voicecheck
    ) {
      this.props.sendRContact(none, none, this.state.voice);
    }
    if (
      this.state.emailcheck &&
      this.state.smscheck &&
      !this.state.voicecheck
    ) {
      this.props.sendRContact(this.state.email, this.state.phone, none);
    }
    if (
      this.state.emailcheck &&
      !this.state.smscheck &&
      this.state.voicecheck
    ) {
      this.props.sendRContact(this.state.email, none, this.state.voice);
    }
    if (
      !this.state.emailcheck &&
      this.state.smscheck &&
      this.state.voicecheck
    ) {
      this.props.sendRContact(none, this.state.phone, this.state.voice);
    }
    if (
      !this.state.emailcheck &&
      !this.state.smscheck &&
      !this.state.voicecheck
    ) {
      this.props.sendRContact(none, none, none);
    }
  };
  render() {
    return (
      <div class="landing-body">
        <React.Fragment>
          <Back onClick={this.goBack} />
          <Container>
            <Row>
              <h3>Sign up for reminders</h3>
            </Row>
            <Row>
              <p>
                How would you like to get reminders when it's time to renew
                again?
              </p>
              <p>Choose the reminders you want to get:</p>
            </Row>
            <Form>
              <Row>
                <Col xs={1}>
                  <Checkbox
                    class="checkbox"
                    onClick={() => this.handleEmailChecked()}
                  ></Checkbox>
                </Col>
                <Col>
                  <p style={{ marginTop: "0.2rem", marginLeft: "1rem" }}>
                    {" "}
                    <strong>Email</strong>
                  </p>
                </Col>
              </Row>
              {this.state.emailcheck ? (
                <React.Fragment>
                  <div class="reminder-indent">
                    <p> For example person@example.com</p>
                    <FormGroup initialstate={this.state.email}>
                      <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
              <Row>
                <Col xs={1}>
                  <Checkbox
                    class="checkbox"
                    onClick={() => this.handleSmsChecked()}
                  ></Checkbox>
                </Col>
                <Col>
                  <p style={{ marginTop: "0.2rem", marginLeft: "1rem" }}>
                    <strong>Text message</strong>
                  </p>
                </Col>
              </Row>
              {this.state.smscheck ? (
                <React.Fragment>
                  <div class="reminder-indent">
                    <p> For example odslab@ontario.ca</p>{" "}
                    <FormGroup initialstate={this.state.phone}>
                      <input
                        type="email"
                        name="email"
                        value={this.state.phone}
                        onChange={this.handlePChange}
                      />
                    </FormGroup>
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
              <Row>
                <Col xs={1}>
                  <Checkbox
                    class="checkbox"
                    onClick={() => this.handleVoiceChecked()}
                  ></Checkbox>
                </Col>
                <Col>
                  <p style={{ marginTop: "0.2rem", marginLeft: "1rem" }}>
                    <strong>Automated phone call</strong>
                  </p>
                </Col>
              </Row>
              {this.state.voicecheck ? (
                <React.Fragment>
                  <div class="reminder-indent">
                    <p> For example odslab@ontario.ca</p>
                    <FormGroup initialstate={this.state.voice}>
                      <input
                        type="email"
                        name="email"
                        value={this.state.voice}
                        onChange={this.handleVChange}
                      />
                    </FormGroup>
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </Form>
          </Container>
        </React.Fragment>
        <Link to="/review">
          <Button onClick={() => this.onSubmit()}>Next</Button>
        </Link>
      </div>
    );
  }
}
export default withRouter(Notify);
