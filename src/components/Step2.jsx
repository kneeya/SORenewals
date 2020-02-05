import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class Step2 extends Component {
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
              <p className="prompt">Health Card Information</p>
              <p className="prompt">
                Please input your Health Card information below
              </p>
              <p className="prompt">Health Card number</p>
              <Input />
              <Link to="/elig">Next</Link>
            </Row>
          </React.Fragment>
        </Container>
      </React.Fragment>
    );
  }
}
export default withRouter(Step2);
