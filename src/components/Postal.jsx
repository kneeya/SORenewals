import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import { Input } from "reactstrap";

class Postal extends Component {
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
            <Col>
              <h2 className="sub-header">Postal code</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Enter your postal code</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>For example ANA NAN</p>
              <Input />
            </Col>
          </Row>
          <Link to="/elig">
            <Button>Next</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Postal);
