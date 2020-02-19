import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link } from "react-router-dom";
import Back from "./Back";

class Landing2 extends Component {
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
            <Back onClick={this.goBack} /> <h2>Before you Renew</h2>
            <p>You will need:</p>
            <ul>
              <li>
                your driver’s licence, Ontario photo card, and/or health card
              </li>
              <li>10-15 minutes to complete the application all at once</li>
              <li>a valid email address</li>
              <li>a phone number if you are renewing your health card</li>
            </ul>
          </div>
          <div class="section">
            {" "}
            <h2>How you can pay</h2>
            <ul>
              <li>Visa or Mastercard</li>
              <li>Interac® Online account</li>
            </ul>
          </div>
          <Link to="/terms-and-conditions">
            <Button>Next</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing2;
