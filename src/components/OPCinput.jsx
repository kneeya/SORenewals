import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class OPCinput extends Component {
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
            <h2 className="sub-header">Photo Card Information</h2>
          </Row>
          <Row>
            <p className="prompt">Enter your Ontario Photo Card information</p>
          </Row>
          <Row>
            <strong>Ontario Photo Card number</strong>
          </Row>
          <Row>
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
export default withRouter(OPCinput);
