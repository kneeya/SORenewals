import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class TnC extends Component {
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
            <h2 className="sub-header">Terms and Conditions</h2>
          </Row>
          <Row>
            <Col>
              <strong>
                I confirm that I live in Ontario and understand that:
              </strong>
              <li>
                I must live in Ontario for at least 153 days (5 months) in any
                12-month period to keep my OHIP Coverage.
              </li>
              <li>
                ServiceOntario may contact me to confirm that Ontario is my
                primary home.
              </li>
              <li>
                If ServiceOntario contacts me, I must respond within 30 days to
                keep my health coverage.
              </li>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>
                I understand that my information will be checked and confirm
                that:
              </strong>
              <li>
                This renewal application is for me and uses the information on
                my own cards.
              </li>
              <li>
                It is against the law to knowingly provide incorrect information
                for anything related to this application.
              </li>
              <li>
                If any of my personal information changes I will inform the
                Ministry of Health and the Ministry of Transportation, through
                ServiceOntario.
              </li>
              <li>
                My health card and driver’s licence information will be
                collected by ServiceOntario for the Ministry of Health and the
                Ministry of Transportation. Collection of my personal
                information is allowed under section 205 of the Highway Traffic
                Act and in accordance with the Personal Health Information
                Protection Act, 2004.
              </li>
            </Col>
          </Row>

          <Row>
            <Col>
              <strong>
                I understand that I must download, print and keep my documents
                with my expired cards:
              </strong>
              <li>
                The online renewal process may give me a temporary driver's
                licence validation document and/or a Health card renewal
                transaction receipt.
              </li>
              <li>
                I must download and save these documents immediately. If I
                don't, I will have to visit a ServiceOntario centre to complete
                my renewal.
              </li>
              <li>
                For my renewal to be valid, I must print and keep these
                documents with my expired cards until I receive my new cards.
              </li>
              <li>
                Screenshots of the documents are not accepted as proof that my
                cards have been renewed.
              </li>
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>
                Click “I agree” to confirm that you have read and understood the
                information on this page:
              </strong>
            </Col>
          </Row>
          <Link to="/home">
            <Button>I agree</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(TnC);
