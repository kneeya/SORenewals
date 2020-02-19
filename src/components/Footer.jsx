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
            <a href="https://www.ontario.ca/feedback/contact-us?id=7476&nid=56934">
              Contact Us
            </a>
          </Row>
          <Row>
            <a href="https://www.ontario.ca/page/about-ontario">
              About Ontario
            </a>
          </Row>
          <Row>
            <a href="https://www.ontario.ca/page/accessibility">
              Accessibility
            </a>
          </Row>
          <Row>
            <a href="https://www.ontario.ca/page/privacy-statement">Privacy</a>
          </Row>
          <Row>
            <a href="https://www.ontario.ca/page/terms-use">Terms of use</a>
          </Row>
          <Row></Row>
          <Row style={{ paddingTop: "1.5rem" }}>
            <a href="https://www.ontario.ca/page/copyright-information-c-queens-printer-ontario">
              (c) Queen's Printer for Ontario
            </a>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
