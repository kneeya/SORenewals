import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Button, Col } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";

class Notify extends Component {
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

  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        <Container>
          <Row>
            <h2 className="sub-header">Sign up for reminders</h2>
          </Row>
          <Row>
            <p>
              How would you like to get reminders when it's time to renew again?
            </p>
          </Row>
          <br />
          <Row>Choose the reminders you want to get:</Row>
          <Form>
            <Row>
              <Col xs={1}>
                <Checkbox
                  class="checkbox"
                  onClick={() => this.handleEmailChecked()}
                ></Checkbox>
              </Col>
              <Col>
                <strong> Email</strong>
              </Col>
            </Row>
            {this.state.emailcheck ? (
              <React.Fragment>
                <p> For example person@example.com</p>

                <FormGroup initialstate={this.state.email}>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className="text-primary"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                  />
                </FormGroup>
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
                <strong> Text message</strong>
              </Col>
            </Row>
            {this.state.smscheck ? (
              <React.Fragment>
                <p> For example person@example.com</p>

                <FormGroup initialstate={this.state.phone}>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.phone}
                    className="text-primary"
                    placeholder="Enter phone number"
                    onChange={this.handlePChange}
                  />
                </FormGroup>
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
                <strong>Automated phone call</strong>
              </Col>
            </Row>
            {this.state.voicecheck ? (
              <React.Fragment>
                <p> For example person@example.com</p>

                <FormGroup initialstate={this.state.voice}>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.voice}
                    className="text-primary"
                    placeholder="Enter phone number"
                    onChange={this.handleVChange}
                  />
                </FormGroup>
              </React.Fragment>
            ) : (
              ""
            )}
          </Form>
        </Container>
        <Container>
          <Link to="/review-your-details">
            <Button>Next</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Notify);
