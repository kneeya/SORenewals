import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
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
    if (!this.state.dlcheck && this.state.photocheck) {
      this.setState({ opcdisabled: true });
    } else {
      this.setState({ opcdlfail: false });
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
    //removing the fail state if user removes check
    if (this.state.dlcheck && !this.state.photocheck) {
      this.setState({ opcdisabled: true });
    } else {
      this.setState({ opcdlfail: false });
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
    //to prevent both dl adn opc renewal using opcdlfail state
    if (this.state.dlcheck && this.state.photocheck) {
      this.setState({ opcdisabled: true, opcdlfail: true });
    } else {
      this.setState({ opcdlfail: false });
    }
  };

  render() {
    return (
      <div class="landing-body">
        <React.Fragment>
          <Back onClick={this.goBack} />

          {this.state.fail || this.state.opcdlfail ? (
            <Error
              id1="#choosecard"
              bul1="Choose the card(s) you want to renew (select at least one)"
            />
          ) : (
            ""
          )}
          <div
            className={
              this.state.fail || this.state.opcdlfail ? "error-content" : ""
            }
          >
            <h2 id="choosecard">Choose the card(s) you want to renew</h2>
            <p>(select at least one)</p>
            <p>
              <b>Note:</b> You cannot renew both your driver’s licence and your
              photo card at the same time.
            </p>
            {//this prop is a state in App.js, when true it shows this error msg
            this.state.fail ? (
              <React.Fragment>
                <ErrorMsg msg="You must choose one or more card(s) on this page and click next to continue." />
                <br></br>
              </React.Fragment>
            ) : this.state.opcdlfail ? (
              <React.Fragment>
                <div>
                  <ErrorMsg msg="" />
                  <p class="weird-one-line-err">Choose only one of:</p>
                  <ul>
                    <li class="weird-error">driver’s licence</li>
                    <li class="weird-error">Ontario photo card</li>
                  </ul>
                </div>
              </React.Fragment>
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
                  <p class="checkbox-text"> Driver's Licence</p>
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
                  <p class="checkbox-text"> Ontario Photo Card</p>
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
                  <p class="checkbox-text">Health Card</p>
                </Col>
              </Row>
            </Form>
          </div>
          {/*this ? operator determines whether to let the user proceed or not based on their selection */}
          {(!this.state.dlcheck &&
            !this.state.healthcheck &&
            !this.state.photocheck) ||
          (this.state.dlcheck && this.state.photocheck) ? (
            <Button onClick={() => this.onSubmit()}>Next</Button>
          ) : (
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
          )}
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(Home);
