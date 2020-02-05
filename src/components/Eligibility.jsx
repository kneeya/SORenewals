import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Address from "./Address.jsx";

class Eligibility extends Component {
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
        <Link exact path="/address" component={Address} />
        <Back onClick={this.goBack} />
      </React.Fragment>
    );
  }
}

export default withRouter(Eligibility);
