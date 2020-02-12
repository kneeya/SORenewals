import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

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
          <Back onClick={this.goBack} />
          <Row>
            <h2 class="ineligible-text" style={{ marginLeft: 1 + "rem" }}>
              You are <strong>not </strong>eligible to renew online at this
              time.
            </h2>
            <p style={{ marginLeft: 1 + "rem" }}>
              Your address must be updated before you can renew your:
            </p>
          </Row>
          <Row>
            <ul>
              <li>health card</li>
            </ul>
          </Row>
          {this.props.showopc ? (
            <React.Fragment>
              <h3>By continuing, you will only be renewing your photo card.</h3>
              <br />
              <Link to="/pc-input">
                <Button>Continue to only renew your photo card</Button>
              </Link>
            </React.Fragment>
          ) : (
            ""
          )}
          {this.props.showdl ? (
            <React.Fragment>
              <h3>
                By continuing, you will only be renewing your driver's licence.
              </h3>
              <br />
              <Link to="/med-con2">
                <Button>Continue to only renew your driver's licence</Button>
              </Link>
            </React.Fragment>
          ) : (
            ""
          )}
          <Row>
            <p style={{ marginLeft: 1 + "rem" }}>
              Please visit a ServiceOntario centre to update your address and
              renew in-person.
            </p>
          </Row>
          <Button>Find your nearest ServiceOntario</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(IneligibleFiveMos);
