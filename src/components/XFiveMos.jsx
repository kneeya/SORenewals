import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class IneligibleFiveMos extends Component {
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
            <h2 className="sub-header">
              You are not eligible to renew online at this time.
            </h2>
            <h3>You must visit a ServiceOntario centre to renew your:</h3>
          </Row>
          <Row>
            <ul>
              <li>health card</li>
            </ul>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(IneligibleFiveMos);
