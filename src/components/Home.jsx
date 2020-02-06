import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  state = {
    dlcheck: false,
    healthcheck: false,
    photocheck: false
  };

  goBack() {
    this.props.history.goBack();
  }

  //handle fcts set the states of dlcheck, healthcheck and photocheck to true

  handleDlChecked = () => {
    let dlcheck = !this.state.dlcheck;
    this.setState({ dlcheck });
    if (
      !this.state.dlcheck ||
      !this.state.healthcheck ||
      !this.state.photocheck
    ) {
      this.setState({ fail: false });
    }
  };

  handleOpcChecked = () => {
    let photocheck = !this.state.photocheck;
    this.setState({ photocheck });
    if (
      !this.state.dlcheck ||
      !this.state.healthcheck ||
      !this.state.photocheck
    ) {
      this.setState({ fail: false });
    }
  };

  handleHcChecked = () => {
    let healthcheck = !this.state.healthcheck;
    this.setState({ healthcheck });
    if (
      !this.state.dlcheck ||
      !this.state.healthcheck ||
      !this.state.photocheck
    ) {
      this.setState({ fail: false });
    }
  };
  //this fct is the getInfo fct in App.js and is being called on as a property to be used in this component
  onSubmit = () => {
    // sending states of Home.jsx to App.js using this fct
    this.props.sendInfo(
      this.state.dlcheck,
      this.state.healthcheck,
      this.state.photocheck
    );
    //setting a fail state to determine whether or not to show an error
    if (
      !this.state.dlcheck &&
      !this.state.healtcheck &&
      !this.state.photocheck
    ) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />

        {this.state.fail ? (
          <Error bul1="Choose the card(s) you want to renew (select at least one)" />
        ) : (
          ""
        )}
        <Container className={this.state.fail ? "error-content" : ""}>
          <h2 class="sub-header">Choose the card(s) you want to renew</h2>
          <p>(select at least one)</p>
          {//this prop is a state in App.js, when true it shows this error msg
          this.state.fail ? (
            <ErrorMsg msg="You must select one or more card(s)" />
          ) : (
            ""
          )}
          <Form>
            <Row>
              <Col xs={1}>
                <Checkbox
                  class="checkbox"
                  onClick={() => this.handleDlChecked()}
                ></Checkbox>
              </Col>
              <Col>
                <p> Driver's Licence</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <Checkbox
                  class="checkbox"
                  onClick={() => this.handleOpcChecked()}
                ></Checkbox>
              </Col>
              <Col>
                <p> Ontario Photo Card</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <Checkbox
                  class="checkbox"
                  onClick={() => this.handleHcChecked()}
                ></Checkbox>
              </Col>
              <Col>
                <p>Health Card</p>
              </Col>
            </Row>
            {/*this ? operator determines whether to let the user proceed or not based on their selection */}
            {this.state.dlcheck ||
            this.state.healthcheck ||
            this.state.photocheck ? (
              <Link to="/before-you-proceed">
                <Button
                  onClick={() =>
                    this.onSubmit(
                      this.state.dlcheck,
                      this.state.healthcheck,
                      this.state.photocheck
                    )
                  }
                >
                  Next
                </Button>
              </Link>
            ) : (
              <Button onClick={() => this.onSubmit()}>Next</Button>
            )}
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Home);
