import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import ErrorMsg from "./error/ErrorMsg";

class Ineligible3 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div class="landing-body">
          <div class="section">
            <Back onClick={this.goBack} />
            <Container>
              <Row>
                <h2 class="ineligible-text">
                  You are <strong>not </strong>eligible to renew online at this
                  time.
                </h2>
                <p>You must visit a ServiceOntario centre to renew your:</p>
              </Row>
              <Row>
                <ul>
                  <li>
                    <strong>driver's licence </strong>
                  </li>
                </ul>
              </Row>
              <Row>
                <p>
                  If your medical condition has changed, please bring supporting
                  documentation.
                </p>
              </Row>
              <Row>
                <p>
                  <a
                    target="_blank"
                    href="https://www.ontario.ca/page/serviceontario-locations-hours-and-contact"
                  >
                    Find your nearest ServiceOntario centre
                  </a>{" "}
                </p>
              </Row>
            </Container>
          </div>
          {this.props.showhc ? (
            <React.Fragment>
              <ErrorMsg msg="By continuing, you will only be renewing your health card." />
              <Link to="/step2">
                <Button>Continue to renew only your health card</Button>
              </Link>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Ineligible3);
