import React, { Component } from "react";
import ReactBootstrap, { FormGroup } from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    hc: this.props.hc,
    nchar: this.props.hnchar,
    healthdisabled: true,
    chardisabled: true
  };
  goBack() {
    this.props.history.goBack();
  }
  checkhealth() {
    var regex = /^\d{4}[ -]?\d{3}[ -]?\d{3}[ -]?[A-Za-z][A-Za-z]$/;
    var match = regex.exec(this.state.hc);
    if (match) {
      this.setState({ healthdisabled: false, hcfail: false });
    } else {
      this.setState({ healthdisabled: true, hcfail: true });
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
  componentDidMount() {
    //this.checkhealth();
    //this.checkninechar();
    window.scrollTo(0, 0);
  }
  handleHChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ hc: value });
  };
  handleNChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ nchar: value });
  };
  onSubmit() {
    this.checkninechar();
    this.checkhealth();
  }
  onClick = () => {
    if (!this.state.chardisabled && !this.state.chardisabled) {
      if (this.props.showdl) {
        this.props.history.push("/step1");
      } else if (this.props.showopc) {
        this.props.history.push("/pc-input");
      } else this.props.history.push("/healthcard");
      this.sendHC();
    }
  };

  sendHC = () => {
    this.props.sendHC(this.state.hc, this.state.nchar);
  };

  render() {
    return (
      <div class="landing-body">
        <React.Fragment>
          <Back onClick={this.goBack} />
          {this.state.hcfail && this.state.charfail ? (
            <Error
              id1="#hcnumber"
              id2="#hcsequence"
              bul1="Health card number and version code"
              bul2="9 number sequence on card"
            />
          ) : (
            ""
          )}
          {this.state.hcfail && !this.state.charfail ? (
            <Error id1="#hcnumber" bul1="Health card number and version code" />
          ) : this.state.charfail && !this.state.hcfail ? (
            <Error id1="#hcsequence" bul1="9 number sequence on card" />
          ) : (
            ""
          )}
          <h3>Health Card Information</h3>
          <p>Enter your card information</p>
          <div class="section">
            <div className={this.state.hcfail ? "error-content" : ""}>
              <p id="hcnumber">
                <strong>Health Card number and version code</strong>
              </p>
              {this.state.hcfail ? (
                <ErrorMsg msg="Enter your health card number and version code." />
              ) : (
                ""
              )}
              <p>For example 1234 123 421 AA</p>
              <FormGroup initialstate={this.state.hc}>
                <input
                  value={this.state.hc}
                  onChange={this.handleHChange}
                  //onBlur={() => this.checkhealth()}
                />
              </FormGroup>
              <p>You can find your health card number and version code here:</p>
              <img class="card-photo" src="/HCFront.png"></img>
            </div>
          </div>
          <div class="section">
            <div className={this.state.charfail ? "error-content" : ""}>
              <p id="hcsequence">
                {" "}
                <strong>9 character sequence on card</strong>
              </p>
              <p>
                Your 9 character sequence is found in the box on the back of
                your card.
              </p>
              {this.state.charfail ? (
                <ErrorMsg msg="Enter your 9 character sequence on your health card." />
              ) : (
                ""
              )}
              <p>For example AA1234567</p>
              <FormGroup initialstate={this.state.nchar}>
                <input
                  value={this.state.nchar}
                  onChange={this.handleNChange}
                  //onBlur={() => this.checkninechar()}
                />
              </FormGroup>
              <p>You can find your 9 character sequence here:</p>
              <img class="card-photo" src="/HCBack.png"></img>
            </div>
          </div>
          {/* {this.state.chardisabled || this.state.healthdisabled ? (
            <Button onClick={() => this.onSubmit()}>Next</Button>
          ) : this.props.showdl ? (
            <Link to="/step1">
              <Button onClick={() => this.onClick()}>Next</Button>
            </Link>
          ) : this.props.showopc ? (
            <Link to="/pc-input">
              <Button onClick={() => this.onClick()}>Next</Button>
            </Link>
          ) : (
            <Link to="/healthcard">
              <Button onClick={() => this.onClick()}>Next</Button>
            </Link>
          )} */}
          <Button onClick={() => this.onSubmit()}>Next</Button>
        </React.Fragment>
      </div>
    );
  }
}
export default withRouter(Step2);
