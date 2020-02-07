import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter, Redirect } from "react-router-dom";
import Back from "./Back";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

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
    let acknowledge = !this.state.acknowledge;
    this.setState({ acknowledge });
    this.setState({ fail: false });
  }

  onSubmit = () => {
    if (this.state.acknowledge === false) {
      this.setState({ fail: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        {this.state.fail ? <Error bul1="Before you proceed" /> : ""}
        <Container className={this.state.fail ? "error-content" : ""}>
          <h2 className="sub-header">Before you proceed</h2>

          {this.state.fail ? (
            <ErrorMsg msg="Please confirm your understanding before proceeding" />
          ) : (
            ""
          )}
          <Form>
            <Row>
              <Col xs={1}>
                <Checkbox
                  class="checkbox"
                  onClick={() => this.handleChecked()}
                ></Checkbox>
              </Col>
              <Col>
                <p>
                  I acknowledge and understand that only the full class portion
                  of my driver's licence can be renewed online.
                </p>
              </Col>
            </Row>
          </Form>

          {this.state.acknowledge ? (
            <Link onClick={() => this.onSubmit()} to="/elig">
              <Button>Next</Button>
            </Link>
          ) : (
            <Button onClick={() => this.onSubmit()}>Next</Button>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(ByP);
