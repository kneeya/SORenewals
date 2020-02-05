import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class Healthcard extends Component {
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
          <React.Fragment>
            <Row>
              <p className="prompt">Driver's License Information</p>
              <p className="prompt">
                Please input your driver's license information below
              </p>
              <p className="prompt">Driver's license number</p>
              <Input />
            </Row>
          </React.Fragment>
          <React.Fragment>
            <Row>
              <p className="prompt">Ontario Photo Card Information</p>
              <p className="prompt">Please input your OPC information below</p>
              <p className="prompt">Ontario Photo Card number</p>
              <Input />
            </Row>
          </React.Fragment>
          <Link to="/step2">Next</Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Healthcard);
