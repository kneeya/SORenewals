import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";
import MaskedInput from "react-text-mask";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.checkdriver = this.checkdriver.bind(this);
    this.checktrill = this.checktrill.bind(this);
  }
  state = {
    driverdisabled: false,
    dl: "",
    trill: ""
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
  }

  checktrill() {
    if (this.state.trill === "") {
      this.setState({ trilldisabled: true });
    } else if (this.state.trill.length === 7) {
      this.setState({ trilldisabled: true });
    } else {
      this.setState({ trilldisabled: false, trillfail: false });
    }
  }
  checkdriver() {
    var check1 = parseInt(this.state.dl.substring(13, 15));
    var check2 = parseInt(this.state.dl.substring(15, 17));

    // console.log(this.state.dl);
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

  componentDidMount() {
    this.checkdriver();
    this.checktrill();
  }

  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        {this.state.dlfail && this.state.trillfail ? (
          <Error
            bul1="Driver's license number"
            bul2="7 number sequence on card"
          />
        ) : (
          ""
        )}
        {this.state.dlfail && !this.state.trillfail ? (
          <Error bul1="Driver's license number" />
        ) : this.state.trillfail && !this.state.dlfail ? (
          <Error bul1="7 number sequence on card" />
        ) : (
          ""
        )}
        <Container>
          <Row>
            <h2 className="sub-header">Driver's License Information</h2>
          </Row>
          <Row>
            <p className="prompt">Enter your license information</p>
          </Row>
        </Container>
        <Container className={this.state.dlfail ? "error-content" : ""}>
          <Row>
            <strong>Driver's license number</strong>
          </Row>
          {this.state.dlfail ? (
            <ErrorMsg msg="Enter your driver's licence number." />
          ) : (
            ""
          )}
          <Row>
            <Col>
              <p>For example A1234 12345 12345</p>
              <MaskedInput
                ref={input => (this.driver = input)}
                onChange={() => {
                  let temp = this.driver.textMaskInputElement.state
                    .previousConformedValue;

                  this.setState({ dl: temp });
                }}
                onBlur={() => this.checkdriver()}
                mask={[
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,
                  " ",
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,
                  " ",
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,
                  /[A-Za-z0-9]/,

                  /[A-Za-z0-9]/
                ]}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <p>You can find your driver's license number here:</p>
          </Row>
          {/* input card img*/}
        </Container>
        <Container className={this.state.trillfail ? "error-content" : ""}>
          <Row>
            <strong>7 number sequence on card</strong>
          </Row>
          <Row>
            <p>
              Your 7 number sequence is found in between the asterisks (*) on
              the back of your card.
            </p>
          </Row>
          {this.state.trillfail ? (
            <ErrorMsg msg="Enter your driver's license 7 number sequence" />
          ) : (
            ""
          )}
          <Row>
            <Col>
              <p>For example 0237452</p>
              <Input
                ref={input => (this.state.trilly = input)}
                onChange={() => {
                  let temp = this.state.trilly;
                  temp = parseInt(this.state.trilly.value);

                  this.setState({ trill: temp });
                }}
                onBlur={() => this.checktrill()}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <p>You can find your 7 number sequence here:</p>
          </Row>
          {/* input card img*/}

          {this.state.driverdisabled || this.state.trilldisabled ? (
            <Button onClick={() => this.onSubmit()}>Next</Button>
          ) : (
            <Link to="/postal">
              <Button>Next</Button>
            </Link>
          )}
        </Container>
      </React.Fragment>
    );
  }
}
export default withRouter(Step1);
