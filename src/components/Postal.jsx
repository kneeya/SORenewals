import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import { Input } from "reactstrap";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class Postal extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.checkpostal = this.checkpostal.bind(this);
  }
  state = {
    postal: ""
  };
  goBack() {
    this.props.history.goBack();
  }

  checkpostal() {
    let postallength = this.state.postal.length;
    if (this.state.postal === "") {
      this.setState({ postaldisabled: true });
    } else if (postallength === 6) {
      this.setState({ postaldisabled: true });
    } else {
      this.setState({ postaldisabled: false, fail: false });
    }
  }

  componentDidMount() {
    this.checkpostal();
  }

  onSubmit() {
    if (this.state.postaldisabled) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        {this.state.fail ? <Error bul1="Postal code" /> : ""}
        <Container className={this.state.fail ? "error-content" : ""}>
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
          {this.state.fail ? <ErrorMsg msg="You must choose one." /> : ""}
          <Row>
            <Col>
              <p>For example ANA NAN</p>
              <Input
                ref={input => (this.state.posty = input)}
                onChange={() => {
                  let temp = this.state.posty;
                  temp = parseInt(this.state.posty.value);

                  this.setState({ postal: temp });
                }}
                onBlur={() => this.checkpostal()}
              />
            </Col>
          </Row>
          {this.state.postaldisabled ? (
            <Button onClick={() => this.onSubmit()}>Next</Button>
          ) : (
            <Link to="/contact">
              <Button>Next</Button>
            </Link>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Postal);
