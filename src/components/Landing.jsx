import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link } from "react-router-dom";

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div class="landing-body">
          <h1 class="landing-header">Renew your Ontario cards</h1>
          <img src="/cards.png" alt="" class="cards" height="80%" width="40%" />
          <br />
          <p class="lead-text">What you can renew online:</p>
          <ul>
            <li class="lead-text">
              driver's licence <strong>($90)</strong>
            </li>
            <li class="lead-text">
              photo card <strong>($30)</strong>
            </li>
            <li class="lead-text">
              health card <strong>(free)</strong>
            </li>
          </ul>
          <hr />
          <Link to="/byb">
            <Button>Start</Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
