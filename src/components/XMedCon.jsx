import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import ErrorMsg from "./error/ErrorMsg";
import ErrorB from "./error/ErrorMsgB";

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
            <h2 class="ineligible-text">
              You are <strong>not </strong>eligible to renew online at this
              time.
            </h2>
            <div class="section">
              <p>
                You cannot have had any medical conditions that may affect your
                ability to drive or have had a doctor tell you not to drive
                since you last renewed your driver’s licence to renew your:
              </p>
            </div>
            <ul>
              <li>
                <strong>driver's licence </strong>
              </li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>
              {this.props.showhc ? (
                <React.Fragment>
                  If your medical condition has changed, please bring supporting
                  documentation to your‏‏‎ ‎
                  <a
                    target="_blank"
                    href="https://www.ontario.ca/page/serviceontario-locations-hours-and-contact"
                  >
                    nearest ServiceOntario location.
                  </a>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  If your medical condition has changed, please bring supporting
                  documentation to your nearest ServiceOntario location.
                </React.Fragment>
              )}
            </p>
          </div>
          {this.props.showhc ? (
            <React.Fragment>
              <ErrorB msg="By continuing, you will only be renewing your health card." />
              <Link to="/step2">
                <Button>Continue to renew only your health card</Button>
              </Link>
            </React.Fragment>
          ) : (
            <Button>Find your nearest ServiceOntario</Button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Ineligible3);
