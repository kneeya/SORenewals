import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class MedCon2 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.handleNo = this.handleNo.bind(this);
    this.handleYes = this.handleYes.bind(this);
  }
  state = {};
  goBack() {
    this.props.history.goBack();
  }

  onSubmit() {
    if (!this.state.yes && !this.state.no) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
  }

  handleNo = () => {
    this.setState({ no: true, yes: false, fail: false });
  };

  handleYes = () => {
    this.setState({ yes: true, no: false, fail: false });
  };

  render() {
    return (
      <React.Fragment>
        <div class="landing-body">
          <Back onClick={this.goBack} />
          {this.state.fail ? (
            <Error
              bul1="Since you last renewed your driver's licence, have you had any
            medical conditions that may affect your ability to drive, or has
            a doctor told you not to drive?"
            />
          ) : (
            ""
          )}
          <Container className={this.state.fail ? "error-content" : ""}>
            <Row>
              <h3>
                Since you last renewed your driver's licence, have you had any
                medical conditions that may affect your ability to drive, or has
                a doctor told you not to drive?
              </h3>
            </Row>
            {this.state.fail ? (
              <ErrorMsg msg="You must choose one answer on this page and click next to continue." />
            ) : (
              ""
            )}
            <div class="radio-margins">
              <Row>
                <Col>
                  <Radio value="Yes" onClick={() => this.handleYes()} />
                  <Radio value="No" onClick={() => this.handleNo()} />
                </Col>
              </Row>
            </div>
            {!this.state.yes && !this.state.no ? (
              <Button onClick={() => this.onSubmit()}>Next</Button>
            ) : this.state.no ? (
              <Link to="/vision2">
                <Button>Next</Button>
              </Link>
            ) : (
              <Link to="/ineligible">
                <Button>Next</Button>
              </Link>
            )}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(MedCon2);
