import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter, Route, BrowserRouter } from "react-router-dom";
import Address from "./Address.jsx";

class Eligibility extends Component {
  state = {
    showdl: this.props.showdl,
    showhc: this.props.showhc,
    showopc: this.props.showopc
  };

  render() {
    return (
      <React.Fragment>
        <Address showdl={this.props.showdl} showhc={this.props.showhc} />
      </React.Fragment>
    );
  }
}

export default withRouter(Eligibility);
