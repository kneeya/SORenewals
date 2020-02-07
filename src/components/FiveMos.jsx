import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";

class FiveMos extends Component {
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
        <Back onClick={this.goBack} />
        <Container>
          <Row>
            <h2 className="sub-header">
              Have you lived in Ontario for 5 months in the past year?
            </h2>
          </Row>
          <Row>
            <p>
              The Ministry of Health may contact you for further verification
            </p>
          </Row>
          <Row>
            <Col>
              <Radio value="Yes"></Radio>
              <Radio value="No"></Radio>
            </Col>
          </Row>
          <Link to="/contact">
            <Button>Next</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(FiveMos);
