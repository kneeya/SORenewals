import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container style={{ background: "#ededed" }}>
          <Row>
            <p>Contact Us</p>
          </Row>
          <Row>
            <p>About Ontario</p>
          </Row>
          <Row>
            <p>Accessibility</p>
          </Row>
          <Row>
            <p>Privacy</p>
          </Row>
          <Row>
            <p>Terms of use</p>
          </Row>
          <Row></Row>
          <Row style={{ paddingTop: "1.5rem" }}>
            <p>(c) Queen's Printer for Ontario</p>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
