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
    photocheck: false,
    proceed: false
  };

  //handle fcts set the states of dlcheck, healthcheck and photocheck to true

  handleDlChecked = () => {
    let dlcheck = !this.state.dlcheck;
    this.setState({ dlcheck });
    if (this.state.dlcheck === false) {
      console.log("swag");
    }
  };

  handleOpcChecked = () => {
    let photocheck = !this.state.photocheck;
    this.setState({ photocheck });
  };

  handleHcChecked = () => {
    let healthcheck = !this.state.healthcheck;
    this.setState({ healthcheck });
  };
  //this fct is the getInfo fct in App.js and is being called on as a property to be used in this component
  onSubmit = () => {
    // sending states of Home.jsx to App.js using this fct
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
          <h2 class="sub-header">
            Choose the card(s) you want to renew (select at least one)
          </h2>
          {//this prop is a state in App.js, when true it shows this error msg
          this.props.showerror ? (
            <p className="error-msg">You must select one of the products</p>
          ) : (
            ""
          )}
          <Form>
            <Row>
              <Col xs={1}>
                <Checkbox
                  class="checkbox"
                  onClick={() => this.handleDlChecked()}
                ></Checkbox>
              </Col>
              <Col>
                <p> Driver's Licence</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <Checkbox
                  class="checkbox"
                  onClick={() => this.handleOpcChecked()}
                ></Checkbox>
              </Col>
              <Col>
                <p> Ontario Photo Card</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <Checkbox
                  class="checkbox"
                  onClick={() => this.handleHcChecked()}
                ></Checkbox>
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
