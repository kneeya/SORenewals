import React, { Component } from "react";
import ReactBootstrap, { FormGroup } from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter, Redirect } from "react-router-dom";
import Back from "./Back";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";
import "../App.css";

class OPCinput extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  state = {
    opc: this.props.opc,
    nchar: this.props.nchar,
    photodisabled: true,
    chardisabled: true
  };
  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  checkphoto() {
    var regex = /^\d{3}[ -]?[A-Za-z][A-Za-z]\d{2}[ -]?\d{5}$/;
    var match = regex.exec(this.state.opc);
    if (match) {
      this.setState({ photodisabled: false, opcfail: false });
    } else {
      this.setState({ photodisabled: true, opcfail: true });
    }
  }
  checkninechar() {
    var regex = /^[A-Za-z][A-Za-z]\d{7}$/;
    var match = regex.exec(this.state.nchar);
    if (match) {
      this.setState({ chardisabled: false, charfail: false });
    } else {
      this.setState({ chardisabled: true, charfail: true });
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0 });
      this.onClick();
    }, 0.001);
  }
  onSubmit() {
    this.checkninechar();
    this.checkphoto();
  }
  onClick = () => {
    if (!this.state.chardisabled && !this.state.photodisabled) {
      this.sendOPC();
      this.props.history.push("/postal");
    }
  };
  handleOPChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ opc: value });
  };
  handleNChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ nchar: value });
  };
  sendOPC = () => {
    this.props.sendOPC(this.state.opc, this.state.nchar);
  };
  render() {
    return (
      <div class="landing-body">
        <React.Fragment>
          <Back onClick={this.goBack} />
          {this.state.opcfail && this.state.charfail ? (
            <Error
              id1="#opcnumber"
              id2="#opcsequence"
              bul1="Photo card number and version code"
              bul2="9 character sequence on card"
            />
          ) : (
            ""
          )}
          {this.state.opcfail && !this.state.charfail ? (
            <Error id1="#opcnumber" bul1="Ontario photo card" />
          ) : this.state.charfail && !this.state.opcfail ? (
            <Error id1="#opcsequence" bul1="9 character sequence on card" />
          ) : (
            ""
          )}
          <h3>Photo Card Information</h3>
          <p>Enter your Ontario Photo Card information</p>
          <div class="section">
            <div className={this.state.opcfail ? "error-content" : ""}>
              <p>
                {" "}
                <strong id="opcnumber">Ontario Photo Card number</strong>
              </p>
              {this.state.opcfail ? (
                <ErrorMsg msg="Enter your Ontario photo card number." />
              ) : (
                ""
              )}
              <p>For example 123 PD34 12345</p>
              <FormGroup initialstate={this.state.opc}>
                <input
                  value={this.state.opc}
                  onChange={this.handleOPChange}
                  //onBlur={() => this.checkphoto()}
                />
              </FormGroup>
              <p>You can find your Ontario photo card number here:</p>
              <img class="card-photo" src="/OPCNum.png"></img>
            </div>
          </div>
          <div class="section">
            <div className={this.state.charfail ? "error-content" : ""}>
              <p id="opcsequence">
                <strong>9 character sequence on card</strong>
              </p>
              <p>
                Your 9 character sequence is found in the fifth field on the
                front of your card.
              </p>
              {this.state.charfail ? (
                <ErrorMsg msg="Enter your Ontario photo card 9 character sequence" />
              ) : (
                ""
              )}
              <p>For example MD0237452</p>
              <FormGroup initialstate={this.state.nchar}>
                <input
                  value={this.state.nchar}
                  onChange={this.handleNChange}
                  //onBlur={() => this.checkninechar()}
                />
              </FormGroup>
              <p>You can find your 9 character sequence here:</p>
              <img class="card-photo" src="/OPCSeq.png"></img>
            </div>
          </div>

          <Button onClick={() => this.onSubmit()}>Next</Button>
        </React.Fragment>
      </div>
    );
  }
}
export default withRouter(OPCinput);
