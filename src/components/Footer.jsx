import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="footer">
          <a href="https://www.ontario.ca/feedback/contact-us?id=7476&nid=56934">
            Contact Us
          </a>
          <br />
          <a href="https://www.ontario.ca/page/about-ontario">About Ontario</a>
          <br />
          <a href="https://www.ontario.ca/page/accessibility">Accessibility</a>
          <br />
          <a href="https://www.ontario.ca/page/privacy-statement">Privacy</a>
          <br />
          <a href="https://www.ontario.ca/page/terms-use">Terms of use</a>
          <br />
          <br />
          <a href="https://www.ontario.ca/page/copyright-information-c-queens-printer-ontario">
            (c) Queen's Printer for Ontario
          </a>
        </div>
      </React.Fragment>
    );
  }
}
