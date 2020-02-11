import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
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
    hc: "",
    nchar: ""
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
      this.setState({ healthdisabled: true });
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
  componentDidMount() {
    this.checkhealth();
    this.checkninechar();
  }
  onSubmit() {
    if (this.state.healthdisabled) {
      this.setState({ hcfail: true });
    } else {
      this.setState({ hcfail: false });
    }
    if (this.state.chardisabled) {
      this.setState({ charfail: true });
    } else {
      this.setState({ charfail: false });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />
        {this.state.hcfail && this.state.charfail ? (
          <Error
            bul1="Health card number and version code"
            bul2="9 number sequence on card"
          />
        ) : (
          ""
        )}
        {this.state.hcfail && !this.state.charfail ? (
          <Error bul1="Health card number and version code" />
        ) : this.state.charfail && !this.state.hcfail ? (
          <Error bul1="9 number sequence on card" />
        ) : (
          ""
        )}
        <Container>
          <Row>
            <h2 className="sub-header">Health Card Information</h2>
          </Row>
          <Row>
            <p>Enter your card information</p>
          </Row>
        </Container>
        <Container className={this.state.hcfail ? "error-content" : ""}>
          <Row>
            <strong>Health Card number and version code</strong>
          </Row>
          {this.state.hcfail ? (
            <ErrorMsg msg="Enter your health card number and version code." />
          ) : (
            ""
          )}
          <Row>
            <Col>
              <p>For example 1234 123 421 AA</p>
              <input
                id="healthy"
                ref={input => (this.healthy = input)}
                onChange={() => {
                  let temp = this.healthy;
                  temp = this.healthy.value;

                  this.setState({ hc: temp });
                }}
                onBlur={() => this.checkhealth()}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <p>You can find your health card information here:</p>
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
            <ErrorMsg msg="Enter your 9 character sequence on your health card." />
          ) : (
            ""
          )}
          <Row>
            <Col>
              <p>For example AA1234567</p>
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
          {this.state.chardisabled || this.state.healthdisabled ? (
            <Button onClick={() => this.onSubmit()}>Next</Button>
          ) : this.props.showdl ? (
            <Link to="/step1">
              <Button>Next</Button>
            </Link>
          ) : this.props.showopc ? (
            <Link to="/pc-input">
              <Button>Next</Button>
            </Link>
          ) : (
            <Link to="/healthcard">
              <Button>Next</Button>
            </Link>
          )}
        </Container>
      </React.Fragment>
    );
  }
}
export default withRouter(Step2);
