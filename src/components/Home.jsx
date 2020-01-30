import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    dlcheck: false,
    healthcheck: false,
    photocheck: false
  };

  handleDlChecked = () => {
    let dlcheck = !this.state.dlcheck;
    this.setState({ dlcheck });
  };

  handleOpcChecked = () => {
    let photocheck = !this.state.photocheck;
    this.setState({ photocheck });
  };

  handleHcChecked = () => {
    let healthcheck = !this.state.healthcheck;
    this.setState({ healthcheck });
  };

  onSubmit = () => {
    this.props.sendInfo(
      this.state.dlcheck,
      this.state.healthcheck,
      this.state.photocheck
    );
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <img width="225" height="55" src="/logoSO.png" alt="SO-logo" />
          </Row>
          <Form>
            <Row>
              <Col xs={1}>
                <Checkbox onClick={() => this.handleDlChecked()}></Checkbox>
              </Col>
              <Col>
                <p> Driver's Licence</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <Checkbox onClick={() => this.handleOpcChecked()}></Checkbox>
              </Col>
              <Col>
                <p> OPC</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <Checkbox onClick={() => this.handleHcChecked()}></Checkbox>
              </Col>
              <Col>
                <p>Health Card</p>
              </Col>
            </Row>
            <Link to="/step1/">
              <Button
                onClick={() =>
                  this.onSubmit(
                    this.state.dlcheck,
                    this.state.healthcheck,
                    this.state.photocheck
                  )
                }
              >
                Next
              </Button>
            </Link>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
