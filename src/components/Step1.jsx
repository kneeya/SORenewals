import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        <Container>
          <Row>
            <p className="prompt">Driver's License Information</p>
            <p className="prompt">
              Please input your driver's license information below
            </p>
            <p className="prompt">Driver's license number</p>
            <Input />
          </Row>
          <Link to="/postal">
            <Button>Next</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}
export default withRouter(Step1);
