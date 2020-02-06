import { Row, Container, Col } from "react-bootstrap";
import React, { Component } from "react";
import "./Error.css";

export default class Error extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <img
            src="/error-exclaim-small.svg"
            alt="error-symbol"
            className="error-symbol-sm"
          />
          <p className="error-msg">{this.props.msg}</p>
        </Row>
      </React.Fragment>
    );
  }
}
