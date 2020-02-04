import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";

export default class Eligibility extends Component {
  goBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      <React.Fragment>
        <div fluid className="elig-title">
          <Container>
            <Row>
              <p>Eligibility question 1 of 3</p>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <p onClick={this.goBack}>Back</p>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
