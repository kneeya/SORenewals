import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import "./success/success.css";

class NextSteps extends Component {
  state = {
    voicedisabled: false,
    fail: false
  };
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }
  onSubmit() {
    if (this.state.voicedisabled && this.props.showhc) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        <Container className="error-container">
          <Row>
            <img
              className="error-symbol"
              src="/success.png"
              alt="error symbol"
            />
            <div className="error-header">
              Success! You renewed your driver’s licence and health card.
            </div>
          </Row>
          <Row>
            <Col>
              <p>
                We have sent your receipt and temporary document(s) by email to:{" "}
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <h1>What to do next:</h1>
          <ul>
            <li>keep your receipt</li>
            <li>
              print and carry your temporary driver’s licence and health card
              with you
            </li>
            <li>
              confirm that you've signed up for digital reminders for next time
            </li>
          </ul>
          <Link to="" onClick={() => this.onSubmit()}>
            <Button>Next</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(NextSteps);
