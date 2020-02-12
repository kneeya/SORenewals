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
        <div class="landing-body">
          <Back onClick={this.goBack} />
          <Container>
            <Row>
              <h3>Terms and Conditions</h3>
            </Row>
            <Row>
              <p>
                <strong>I confirm that:</strong>
              </p>
            </Row>
            <Row>
              <ul>
                <li>
                  I am renewing my own driver's licence or Ontario photo and/or
                  health card today
                </li>
                <li>
                  I acknowledge it is against the law to provide incorrect
                  information knowingly
                </li>
                <li>
                  I understand my information is being collected by
                  ServiceOntario and the ministries of transportation and health
                  for the reasons outlined in the{" "}
                  <a href="https://ontario.ca" target="_blank">
                    Notice of Collection
                  </a>{" "}
                  as per the{" "}
                  <a href="https://ontario.ca" target="_blank">
                    Ontario privacy policy
                  </a>
                </li>
              </ul>
            </Row>
            <Row>
              <br />
              <p>
                <strong>
                  Click “I agree” to confirm that you have read and understood
                  the information on this page:
                </strong>
              </p>
            </Row>
          </Container>
          <Link to="/home">
            <Button>I agree</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(TnC);
