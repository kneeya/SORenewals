import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";

class Vision extends Component {
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
        <Back onClick={this.goBack} />
        <Container>
          <Row>
            <h2 className="sub-header">
              Do you require glasses or contact lenses to drive?
            </h2>
          </Row>
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
              <Link to="/step2" onClick={() => this.onSubmit()}>
                <Button>Next</Button>
              </Link>
            ) : (
              <Link to="/step1" onClick={() => this.onSubmit()}>
                <Button>Next</Button>
              </Link>
            )
          ) : (
            <Link to="/ineligible" onClick={() => this.onSubmit()}>
              <Button>Next</Button>
            </Link>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Vision);
