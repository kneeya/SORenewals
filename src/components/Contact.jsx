import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

class Contact extends Component {
  state = {
    id: {
      email: "",
      number: "",
      voice: ""
    },
    smsdisabled: false
  };
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }
  checkvoice() {
    if (this.state.id.voice == "") {
      this.setState({ smsdisabled: true });
    }
    if (!(this.state.id.voice.length == 10)) {
      this.setState({ smsdisabled: true });
    } else {
      this.setState({ smsdisabled: false });
    }
    if (!this.state.smsdisabled) {
      console.log("swag");
    }
  }
  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        <Container>
          <Row>
            <h2 className="sub-header">Contact information</h2>
          </Row>
          <Row>
            <p>Enter your contact information below</p>
          </Row>
          <Row>
            <Col>
              <strong>Phone number (optional)</strong>
              <p>For example 5194562343</p>
              <Input
                ref={input => (this.state.voice = input)}
                onChange={() => {
                  let temp = { ...this.state.id };
                  temp.voice = parseInt(this.state.voice.value);
                  this.setState({ id: temp });
                }}
                onBlur={() => this.checkvoice()}
                country="CA"
                className="email"
              />
              <p>
                We may call you to confirm that you live in Ontario, or to
                resolve an issue with your renewal.
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <strong>Email (optional)</strong>
              <p> For example person@example.com</p>
              <Input />
              <p>
                We will email you an electronic receipt and temporary
                docuemnt(s) for this transaction.
              </p>
            </Col>
          </Row>
          <Link to="/notify-so">
            <Button>Next</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Contact);
