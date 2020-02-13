import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import ErrorMsg from "./error/ErrorMsg";

class IneligibleFiveMos extends Component {
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
            <Row>
              <h2 class="ineligible-text" style={{ marginLeft: 1 + "rem" }}>
                You are <strong>not </strong>eligible to renew online at this
                time.
              </h2>
              <p style={{ marginLeft: 1 + "rem" }}>
                You must live in Ontario for at least 5 months in the past year
                before you can renew your:
              </p>
            </Row>
            <Row>
              <ul>
                <li>health card</li>
              </ul>
            </Row>
            {!this.props.showdl && !this.props.showopc ? (
              <Button>Find your nearest ServiceOntario</Button>
            ) : (
              <Row>
                <p style={{ marginLeft: 1 + "rem" }}>
                  <a
                    target="_blank"
                    href="https://www.ontario.ca/page/serviceontario-locations-hours-and-contact"
                  >
                    Find your nearest ServiceOntario centre
                  </a>{" "}
                </p>
              </Row>
            )}
          </div>
          {this.props.showopc ? (
            <React.Fragment>
              <ErrorMsg msg="By continuing, you will only be renewing your photo card." />
              <Link to="/pc-input">
                <Button>Continue to only renew your photo card</Button>
              </Link>
            </React.Fragment>
          ) : (
            ""
          )}
          {this.props.showdl ? (
            <React.Fragment>
              <ErrorMsg msg="By continuing, you will only be renewing your driver's licence." />
              <Link to="/med-con2">
                <Button>Continue to only renew your driver's licence</Button>
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

export default withRouter(IneligibleFiveMos);
