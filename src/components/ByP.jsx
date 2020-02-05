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
    acknowledge: false,
    fail: false
  };

  goBack() {
    this.props.history.goBack();
  }

  handleChecked() {
    this.setState({ acknowledge: true });
  }

  onSubmit = () => {
    if (this.state.acknowledge === false) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        <Container>
          <Row>
            <h2 className="sub-header">Before you proceed</h2>
          </Row>
          {this.state.fail ? (
            <Row>
              <p className="error-msg">
                Please confirm your understanding before proceeding
              </p>
            </Row>
          ) : (
            ""
          )}
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
          {this.state.acknowledge ? (
            <Link onClick={() => this.onSubmit()} to="/step1">
              <Button>Next</Button>
            </Link>
          ) : (
            <Link onClick={() => this.onSubmit()} to="/before-you-proceed">
              <Button>Next</Button>
            </Link>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(ByP);
