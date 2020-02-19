import React, { Component } from "react";
import ReactBootstrap, { FormGroup } from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";
import MaskedInput from "react-text-mask";
import "../App.css";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.checkdriver = this.checkdriver.bind(this);
    this.checktrill = this.checktrill.bind(this);
  }
  state = {
    driverdisabled: false,
    dl: this.props.dl,
    trill: this.props.trill
  };
  goBack() {
    this.props.history.goBack();
  }
  onSubmit() {
    if (this.state.driverdisabled) {
      this.setState({ dlfail: true });
    } else {
      this.setState({ dlfail: false });
    }

    if (this.state.trilldisabled) {
      this.setState({ trillfail: true });
    } else {
      this.setState({ trillfail: false });
    }
    window.scrollTo(0, 0);
  }

  checktrill() {
    var regex = /^(\d{7})$/;
    var match = regex.exec(this.state.trill);
    if (match) {
      this.setState({ trilldisabled: false, trillfail: false });
    } else {
      this.setState({ trilldisabled: true });
    }
  }
  checkdriver() {
    var check1 = parseInt(this.state.dl.substring(13, 15));
    var check2 = parseInt(this.state.dl.substring(15, 17));

    if (this.state.dl === "") {
      this.setState({ driverdisabled: true });
    } else if (
      ((check1 < 1 || check1 > 12) && (check1 < 51 || check1 > 62)) ||
      check2 < 1 ||
      check2 > 31
    ) {
      this.setState({ driverdisabled: true });
    } else {
      this.setState({ driverdisabled: false, dlfail: false });
    }
  }

  onClick = () => {
    this.sendDL();
    window.scrollTo(0, 0);
  };
  sendDL = () => {
    this.props.sendDL(this.state.dl, this.state.trill);
  };

  componentDidMount() {
    this.checkdriver();
    this.checktrill();
    window.scrollTo(0, 0);
  }
  handleTChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ trill: value });
  };
  handleDLChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ dl: value });
  };
  render() {
    return (
      <div class="landing-body">
        <React.Fragment>
          <Back onClick={this.goBack} />
          {this.state.dlfail && this.state.trillfail ? (
            <Error
              id1="#dlnumber"
              id2="#dlsequence"
              bul1="Driver's licence number"
              bul2="7 number sequence on card"
            />
          ) : (
            ""
          )}
          {this.state.dlfail && !this.state.trillfail ? (
            <Error bul1="Driver's licence number" />
          ) : this.state.trillfail && !this.state.dlfail ? (
            <Error bul1="7 number sequence on card" />
          ) : (
            ""
          )}
          <h3>Driver's Licence Information</h3>
          <p>Enter your licence information</p>
          <div class="section">
            <div className={this.state.dlfail ? "error-content" : ""}>
              <p id="dlnumber">
                <strong>Driver's licence number</strong>{" "}
              </p>
              {this.state.dlfail ? (
                <ErrorMsg msg="Enter your driver's licence number." />
              ) : (
                ""
              )}
              <p>For example D6101 50707 51120</p>
              <Form>
                <FormGroup initialstate={this.state.dl}>
                  <input
                    value={this.state.dl}
                    onChange={this.handleDLChange}
                    onBlur={() => this.checkdriver()}
                  />
                </FormGroup>
              </Form>
              <p>You can find your driver's licence number here:</p>
              <img class="card-photo" src="/DLFront.png"></img>
            </div>
          </div>
          <div class="section">
            <div className={this.state.trillfail ? "error-content" : ""}>
              <p id="dlsequence">
                <strong>7-digit on card</strong>
              </p>
              <p>
                Your 7-digit is found in between the asterisks (*) on the back
                of your card.
              </p>
              {this.state.trillfail ? (
                <ErrorMsg msg="Enter your driver's licence 7 number sequence" />
              ) : (
                ""
              )}
              <p>For example 0237452</p>
              <FormGroup initialstate={this.state.trill}>
                <input
                  value={this.state.trill}
                  onChange={this.handleTChange}
                  onBlur={() => this.checktrill()}
                />
              </FormGroup>
              <p>You can find your 7-digit number here:</p>
              <img class="card-photo" src="/DLBack.png"></img>
            </div>
          </div>
          {this.state.driverdisabled || this.state.trilldisabled ? (
            <Button onClick={() => this.onSubmit()}>Next</Button>
          ) : (
            <Link to="/postal">
              <Button onClick={() => this.onClick()}>Next</Button>
            </Link>
          )}
        </React.Fragment>
      </div>
    );
  }
}
export default withRouter(Step1);
