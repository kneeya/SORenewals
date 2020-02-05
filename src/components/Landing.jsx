import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="landing-body">
          <h1 class="landing-header">Renew your Ontario cards</h1>
          <p>What you can renew online:</p>
          <ul>
            <li>driver's licence ($90)</li>
            <li>photo card ($30)</li>
            <li>health card (free)</li>
          </ul>
          <hr />
          <h2 class="sub-header">Before you Renew</h2>
          <p>You will need:</p>
          <ul>
            <li>your current card(s) or card details including card number</li>
            <li>10 -15 minutes to complete the application all at once</li>
          </ul>
          <h2 class="sub-header">How you can pay</h2>
          <ul>
            <li>Visa or Mastercard</li>
            <li>Interac® Online account</li>
          </ul>
          <h2 class="sub-header">You may also need</h2>
          <p>
            You will need an additional piece of valid identification and its
            details to renew your health card, for example your:
          </p>
          <ul>
            <li>driver's licence</li>
            <li>photo card</li>
          </ul>
          <br />
          <p>
            Click "Start" to agree to the Terms and Conditions and privacy
            policy.
          </p>
          <Link to="/terms-and-conditions">
            <Button>Start</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
