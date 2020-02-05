import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class ByP extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  state = {
    acknowledge: false
  };

  goBack() {
    this.props.history.goBack();
  }

  handleChecked() {
    this.setState({ acknowledge: true });
  }
  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        <Container>
          <Row>
            <h2 className="sub-header">Before you proceed</h2>
          </Row>
          <Row>
            <Col xs={1}>
              <Checkbox
                class="checkbox"
                onClick={() => this.handleChecked()}
              ></Checkbox>
            </Col>
            <Col>
              <p>
                I acknowledge and understand that only the full class portion of
                my driver's licence can be renewed online.
              </p>
            </Col>
          </Row>
          <Link to="/step1">
            <Button>Next</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(ByP);
