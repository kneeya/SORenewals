import { Row } from "react-bootstrap";
import React, { Component } from "react";

export default class Back extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }

  Back() {
    return (
      <Row className="back-but" onClick={this.goBack}>
        <p>Back</p>
      </Row>
    );
  }
}
