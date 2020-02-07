import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";

class Notify extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }

  handleEmailChecked() {
    //show email input on click
  }

  handleSmsChecked() {
    //show txt msg input on click
  }

  handleVoiceChecked() {
    //show phone call input on click
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
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Notify);
