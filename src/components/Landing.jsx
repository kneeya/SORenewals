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
          <ul>
            <p>What you can renew online:</p>
            <li>driver's licence ($90)</li>
            <li>photo card ($30)</li>
            <li>health card (free)</li>
          </ul>
          <hr />
          <h2 class="sub-header">Before you Renew</h2>
          <ul>
            <p>You will need:</p>
            <li>your current card(s) or card details including card number</li>
            <li>10 -15 minutes to complete the application all at once</li>
          </ul>
          <h2 class="sub-header">How you can pay</h2>
          <ul>
            <li>Visa or Mastercard</li>
            <li>Interac® Online account</li>
          </ul>
          <h2 class="sub-header">You may also need</h2>
          <ul>
            <li>driver's licence</li>
            <li>photo card</li>
          </ul>
          <Link to="/home">
            <Button>Start</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
