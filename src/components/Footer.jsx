import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container
          style={{
            marginTop: "2.5rem",
            background: "#ededed",
            padding: "1.5rem 0 2em 2rem"
          }}
        >
          {" "}
          <Row>
            <a>Contact Us</a>
          </Row>
          <Row>
            <a>About Ontario</a>
          </Row>
          <Row>
            <a>Accessibility</a>
          </Row>
          <Row>
            <a>Privacy</a>
          </Row>
          <Row>
            <a>Terms of use</a>
          </Row>
          <Row></Row>
          <Row style={{ paddingTop: "1.5rem" }}>
            <a>(c) Queen's Printer for Ontario</a>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
