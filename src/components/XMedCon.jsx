import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class Ineligible3 extends Component {
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
              <h2 class="ineligible-text">
                You are <strong>not </strong>eligible to renew online at this
                time.
              </h2>
              <p>Your address must be updated before you can renew your:</p>
            </Row>
            <Row>
              <ul>
                <li>
                  <strong>driver's licence </strong>
                </li>
              </ul>
            </Row>
          </Container>
          {this.props.showhc ? (
            <Link to="/step2">
              <Button>Continue to renew only your health card</Button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Ineligible3);
