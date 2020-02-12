import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import "./success/success.css";

class Review extends Component {
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
        <Container>
          <h1>Review your details</h1>
          <br />
          <h2>
            <strong>Card information</strong>
          </h2>
          <br />
          {this.props.showhc ? <h3>Health card number:</h3> : ""}
          {this.props.showdl ? <h3>Driver's licence number:</h3> : ""}
          {this.props.showopc ? <h3>Photo card number:</h3> : ""}
          <h3>Sex:</h3>
          <hr />
          <h2>
            <strong>Contact Information</strong>
          </h2>
          <h3>Email:</h3>
          <h3>Phone number:</h3>
          <hr />
          <h2>
            <strong>Reminder information</strong>
          </h2>
          <h3>Email:</h3>
          <hr />
          <h2>
            <strong>Mailing Address</strong>
          </h2>
          <p>
            Your card(s) will be sent to the mailing address on file. To change
            it, please visit your nearest ServiceOntario centre.
          </p>
          <hr />
          <p>
            By clicking to pay, you confirm that, to the best of your knowledge,
            the details you are providing are correct.
          </p>
          <Link to="/next-steps" onClick={() => this.onSubmit()}>
            <Button>Next</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Review);
