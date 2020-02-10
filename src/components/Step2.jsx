import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    hc: ""
  };
  goBack() {
    this.props.history.goBack();
  }
  checkhealth() {
    if (this.state.hc === "") {
      this.setState({ healthdisabled: true });
    } else if (this.state.hc.length === 12) {
      this.setState({ healthdisabled: true });
    } else {
      this.setState({ healthdisabled: false, fail: false });
    }
  }
  onSubmit() {
    if (this.state.healthdisabled) {
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
          <Row>
            <p className="prompt">Health Card Information</p>
          </Row>
          <Row>
            <p className="prompt">
              Please input your Health Card information below
            </p>
          </Row>
          <Row>
            <p className="prompt">Health Card number</p>
          </Row>
          <Input
            ref={input => (this.state.healthy = input)}
            onChange={() => {
              let temp = this.state.healthy;
              temp = parseInt(this.state.healthy.value);

              this.setState({ hc: temp });
            }}
            onBlur={() => this.checkhealth()}
          />
          <Row>
            {this.props.showdl ? (
              <Link to="/step1">
                <Button>Next</Button>
              </Link>
            ) : this.props.showopc ? (
              <Link to="/pc-input">
                <Button>Next</Button>
              </Link>
            ) : (
              <Link to="/healthcard">
                <Button>Next</Button>
              </Link>
            )}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default withRouter(Step2);
