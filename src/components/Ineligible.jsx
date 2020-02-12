import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class Ineligible extends Component {
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
          <Row>
            <h2 class="ineligible-text" style={{ marginLeft: 1 + "rem" }}>
              You are <strong>not </strong>eligible to renew online at this
              time.
            </h2>
            <p style={{ marginLeft: 1 + "rem" }}>
              You must visit a ServiceOntario centre to renew your:
            </p>
          </Row>
          <Row>
            <ul>
              {this.props.showhc ? <li>health card</li> : ""}
              {this.props.showopc ? <li>photo card</li> : ""}
              {this.props.showdl ? <li>driver's licence</li> : ""}
            </ul>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Ineligible);
