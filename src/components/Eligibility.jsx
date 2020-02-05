import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Back from "./Back";

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
        <div fluid className="elig-title">
          <Container>
            <Row>
              <p>Eligibility question 1 of 3</p>
            </Row>
          </Container>
        </div>
        <Back onClick={this.goBack} />
      </React.Fragment>
    );
  }
}

export default withRouter(Eligibility);
