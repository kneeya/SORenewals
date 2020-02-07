import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class Address extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.handleNo = this.handleNo.bind(this);
    this.handleYes = this.handleYes.bind(this);
  }
  state = {
    // no: false,
    // fail: false,
    // yes: false
  };
  goBack() {
    this.props.history.goBack();
  }

  onSubmit() {
    if (!this.state.yes && !this.state.no) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
    if (this.state.no === false) {
      console.log("noswag");
    }
    if (this.state.yes === true) {
      console.log("yesswag");
    }
  }

  handleNo = () => {
    let nochecked = !this.state.no;
    this.setState({ no: true, yes: false, fail: false });
  };

  handleYes = () => {
    let yeschecked = !this.state.yes;
    this.setState({ yes: true, no: false, fail: false });
  };

  render() {
    return (
      <React.Fragment>
        <div class="address">
          <Back onClick={this.goBack} />
          {this.state.fail ? (
            <Error bul1="Has your address changed in the last 90 days?" />
          ) : (
            ""
          )}
          <Container className={this.state.fail ? "error-content" : ""}>
            <Row>
              <h2>
                <strong>
                  1. Has your address changed in the last 90 days?
                </strong>
                (required)
              </h2>
              <br />
            </Row>
            {this.state.fail ? <ErrorMsg msg="You must choose one." /> : ""}
            <Row>
              <Col>
                <Radio value="Yes" onClick={() => this.handleYes()} />
                <Radio value="No" onClick={() => this.handleNo()} />
              </Col>
            </Row>
            {!this.state.no && !this.state.yes ? (
              <Button onClick={() => this.onSubmit()}>Next</Button>
            ) : this.state.no ? (
              this.props.showhc ? (
                <Link to="/five-mos" onClick={() => this.onSubmit()}>
                  <Button>Next</Button>
                </Link>
              ) : this.props.showdl ? (
                <Link to="/med-con" onClick={() => this.onSubmit()}>
                  <Button>Next</Button>
                </Link>
              ) : (
                <Link to="/pc-input" onClick={() => this.onSubmit()}>
                  <Button>Next</Button>
                </Link>
              )
            ) : (
              <Link to="/ineligible" onClick={() => this.onSubmit()}>
                <Button>Next</Button>
              </Link>
            )}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Address);
