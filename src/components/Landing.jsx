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
        <h1>Renew your Ontario cards</h1>
        <Link to="/home">
          <Button>Start</Button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Landing;
