import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";
import MaskedInput from "react-text-mask";

class Healthcard extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.checkdriver = this.checkdriver.bind(this);
    this.checktrill = this.checktrill.bind(this);
  }
  state = { dl: "", trill: "", opc: "", nchar: "" };
  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    this.checkphoto();
    this.checkninechar();
    this.checkdriver();
    this.checktrill();
  }
  checkphoto() {
    var regex = /^\d{3}[ -]?[A-Za-z][A-Za-z]\d{2}[ -]?\d{5}$/;
    var match = regex.exec(this.state.opc);
    if (match) {
      this.setState({ photodisabled: false, opcfail: false });
    } else {
      this.setState({ photodisabled: true });
    }
  }
  checkninechar() {
    var regex = /^[A-Za-z][A-Za-z]\d{7}$/;
    var match = regex.exec(this.state.nchar);
    if (match) {
      this.setState({ chardisabled: false, charfail: false });
    } else {
      this.setState({ chardisabled: true });
    }
  }
  onSubmit() {
    if (!this.state.dlchecked && !this.state.opcchecked) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
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
    if (this.state.photodisabled) {
      this.setState({ opcfail: true });
    } else {
      this.setState({ opcfail: false });
    }
    if (this.state.chardisabled) {
      this.setState({ charfail: true });
    } else {
      this.setState({ charfail: false });
    }
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

  handleDl() {
    this.setState({
      dlchecked: true,
      trilldisabled: true,
      driverdisabled: true
    });
    this.setState({
      opcchecked: false,
      chardisabled: false,
      photodisabled: false
    });
    this.setState({ fail: false });
    this.setState({ dlfail: false, trillfail: false });

    //this.checkdriver();
    //this.checktrill();
  }
  onClick = () => {
    this.sendOPC();
    this.sendDL();
  };
  sendOPC = () => {
    this.props.sendOPC(this.state.opc);
  };

  sendDL = () => {
    this.props.sendDL(this.state.dl);
  };

  handleOpc() {
    this.setState({
      dlchecked: false,
      trilldisabled: false,
      driverdisabled: false
    });
    this.setState({
      opcchecked: true,
      chardisabled: true,
      photodisabled: true
    });
    this.setState({ fail: false, opcfail: false, charfail: false });

    //this.checkphoto();
    //this.checkninechar();
  }

  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        {this.state.fail ? <Error bul1="Before you proceed" /> : ""}
        <Container className={this.state.fail ? "error-content" : ""}>
          <React.Fragment>
            <Row>
              <h2 className="sub-header">Verify your identity</h2>
            </Row>
            <Row>
              <p>
                You need to have a valid driver's licence or photo card to renew
                your health card
              </p>
            </Row>
            {this.state.dlchecked ? (
              this.state.dlfail && this.state.trillfail ? (
                <Error
                  bul1="Driver's license number"
                  bul2="7 number sequence on card"
                />
              ) : this.state.dlfail && !this.state.trillfail ? (
                <Error bul1="Driver's license number" />
              ) : this.state.trillfail && !this.state.dlfail ? (
                <Error bul1="7 number sequence on card" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            {this.state.opcchecked ? (
              this.state.opcfail && this.state.charfail ? (
                <Error
                  bul1="Ontario photo card number"
                  bul2="9 character sequence on card"
                />
              ) : this.state.opcfail && !this.state.charfail ? (
                <Error bul1="Ontario photo card number" />
              ) : this.state.charfail && !this.state.opcfail ? (
                <Error bul1="9 character sequence on card" />
              ) : (
                ""
              )
            ) : (
              ""
            )}
            <Row>
              <p>Select one:</p>
            </Row>
            {this.state.fail ? <ErrorMsg msg="You must choose one." /> : ""}
            <Row>
              <Radio value="Driver's licence" onClick={() => this.handleDl()} />
            </Row>
            {this.state.dlchecked ? (
              <React.Fragment>
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
                <Container
                  className={this.state.trillfail ? "error-content" : ""}
                >
                  <Row>
                    <strong>7 number sequence on card</strong>
                  </Row>
                  <Row>
                    <p>
                      Your 7 number sequence is found in between the asterisks
                      (*) on the back of your card.
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
                      <input
                        id="trill"
                        ref={input => (this.trill = input)}
                        onChange={() => {
                          let temp = this.trill.value;
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
                </Container>
              </React.Fragment>
            ) : (
              ""
            )}
            <Row>
              <Radio
                value="Ontario photo card"
                onClick={() => this.handleOpc()}
              />
            </Row>
            {this.state.opcchecked ? (
              <React.Fragment>
                <Container
                  className={this.state.opcfail ? "error-content" : ""}
                >
                  <Row>
                    <strong>Ontario Photo Card number</strong>
                  </Row>
                  {this.state.opcfail ? (
                    <ErrorMsg msg="Enter your Ontario photo card number." />
                  ) : (
                    ""
                  )}
                  <Row>
                    <Col>
                      <p>For example 123 PD34 12345</p>
                      <input
                        id="pics"
                        ref={input => (this.pics = input)}
                        onChange={() => {
                          let temp = this.pics;
                          temp = this.pics.value;

                          this.setState({ opc: temp });
                        }}
                        onBlur={() => this.checkphoto()}
                      />
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <p>You can find your Ontario photo card number here:</p>
                  </Row>
                  {/* input card img*/}
                </Container>
                <Container
                  className={this.state.charfail ? "error-content" : ""}
                >
                  <Row>
                    <strong>9 character sequence on card</strong>
                  </Row>
                  <Row>
                    <p>
                      Your 9 character sequence is found in the box on the back
                      of your card.
                    </p>
                  </Row>
                  {this.state.charfail ? (
                    <ErrorMsg msg="Enter your Ontario photo card 9 character sequence" />
                  ) : (
                    ""
                  )}
                  <Row>
                    <Col>
                      <p>For example MD0237452</p>
                      <input
                        id="nchar"
                        ref={input => (this.nchar = input)}
                        onChange={() => {
                          let temp = this.nchar;
                          temp = this.nchar.value;
                          this.setState({ nchar: temp });
                        }}
                        onBlur={() => this.checkninechar()}
                      />
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <p>You can find your 9 character sequence here:</p>
                  </Row>
                  {/* input card img*/}
                </Container>
              </React.Fragment>
            ) : (
              ""
            )}
          </React.Fragment>
          {(!this.state.dlchecked && !this.state.opcchecked) ||
          this.state.driverdisabled ||
          this.state.trilldisabled ||
          this.state.chardisabled ||
          this.state.photodisabled ? (
            <Button onClick={() => this.onSubmit()}>Next</Button>
          ) : (
            <Link to="/postal">
              <Button onClick={() => this.onClick()}>Next</Button>
            </Link>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Healthcard);
