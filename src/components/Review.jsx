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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        <Container>
          <Row>
            <h1>Review your details</h1>
          </Row>

          <br />
          <Row style={{ borderBottom: "2px solid grey" }}>
            <Col>
              <strong>Card information</strong>

              {this.props.dl ? (
                <p>Driver's licence number: {this.props.dl}</p>
              ) : (
                ""
              )}
              {this.props.opc ? <p>Photo card number: {this.props.opc}</p> : ""}
              {this.props.hc ? <p>Health card number: {this.props.hc}</p> : ""}
            </Col>
          </Row>
          <br />
          <Row style={{ borderBottom: "2px solid grey" }}>
            <Col>
              <strong>Contact Information</strong>
              <p>Email: {this.props.email}</p>
              {this.props.phone ? <p>Phone number: {this.props.phone}</p> : ""}
            </Col>
          </Row>
          {this.props.remail || this.props.rphone || this.props.rvoice ? (
            <Row style={{ borderBottom: "2px solid grey" }}>
              <Col>
                <strong>Reminder information</strong>
                {this.props.remail ? <p>Email: {this.props.remail}</p> : ""}
                {this.props.rphone ? (
                  <p>Phone number: {this.props.rphone}</p>
                ) : (
                  ""
                )}
                {this.props.rvoice ? (
                  <p>Phone number: {this.props.rvoice}</p>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          ) : (
            ""
          )}
          <Row style={{ borderBottom: "2px solid grey" }}>
            <Col>
              <strong>Mailing Address</strong>

              <p>
                Your new card(s) will be sent to the mailing address on file. We
                are unable to share that address for proivacy and security
                reasons.
                <br />
                If your address has changed, visit a ServiceOntario location to
                update your address and renew your card(s).
              </p>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                By clicking to next, you confirm that, to the best of your
                knowledge, the details you are providing are correct.
              </p>
            </Col>
          </Row>

          <Link to="/next-steps" onClick={() => this.onSubmit()}>
            <Button>Next</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Review);
