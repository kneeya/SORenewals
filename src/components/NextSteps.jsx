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
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div class="landing-body">
        <React.Fragment>
          <Back onClick={this.goBack} />
          <div className="success-container">
            <img src="/success.png" alt="success symbol" />
            <div className="success-header">
              Success! You renewed your driver’s licence and health card.
            </div>
            <p style={{ marginBottom: "0rem" }}>
              We have sent your receipt and temporary document(s) by email to:{" "}
            </p>
          </div>
          <div class="section">
            <h3 style={{ marginBottom: "1rem" }}>What to do next:</h3>
            <ul>
              <li>keep your receipt</li>
              <li>
                print and carry your temporary driver’s licence and health card
                with you
              </li>
              <li>
                confirm that you've signed up for digital reminders for next
                time
              </li>
            </ul>
          </div>
          <Link to="" onClick={() => this.onSubmit()}>
            <Button>Next</Button>
          </Link>
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(NextSteps);
