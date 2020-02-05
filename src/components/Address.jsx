import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";

class Address extends Component {
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
        <div class="address">
          <Back onClick={this.goBack} />
          <Container>
            <Row>
              <h2>
                <strong>
                  1. Has your address changed in the last 90 days?
                </strong>{" "}
                (required)
              </h2>
              <br />
              <Col>
                <Radio value="Yes"></Radio>
                <Radio value="No"></Radio>
              </Col>
            </Row>
            <Link to="/elig">Next</Link>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Address);
