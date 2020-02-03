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
        <h1 class="landing-header">Renew your Ontario cards</h1>
        <hr />
        <h2 class="sub-header">Before you Renew</h2>
        <h2 class="sub-header">How you can pay</h2>
        <h2 class="sub-header">You may also need</h2>
        <Link to="/home">
          <Button>Start</Button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Landing;
