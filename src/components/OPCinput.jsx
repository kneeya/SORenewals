import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class OPCinput extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  state = {
    opc: "",
    nchar: ""
  };
  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    this.checkphoto();
    this.checkninechar();
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
  onClick = () => {
    this.sendOPC();
  };
  sendOPC = () => {
    this.props.sendOPC(this.state.opc);
  };
  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        {this.state.opcfail && this.state.charfail ? (
          <Error
            bul1="Health card number and version code"
            bul2="9 character sequence on card"
          />
        ) : (
          ""
        )}
        {this.state.opcfail && !this.state.charfail ? (
          <Error bul1="Ontario photo card" />
        ) : this.state.charfail && !this.state.opcfail ? (
          <Error bul1="9 character sequence on card" />
        ) : (
          ""
        )}
        <Container>
          <Row>
            <h2 className="sub-header">Photo Card Information</h2>
          </Row>
          <Row>
            <p className="prompt">Enter your Ontario Photo Card information</p>
          </Row>
        </Container>
        <Container className={this.state.opcfail ? "error-content" : ""}>
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
        <Container className={this.state.charfail ? "error-content" : ""}>
          <Row>
            <strong>9 character sequence on card</strong>
          </Row>
          <Row>
            <p>
              Your 9 character sequence is found in the box on the back of your
              card.
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
        <Container>
          {this.state.chardisabled || this.state.photodisabled ? (
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
export default withRouter(OPCinput);
