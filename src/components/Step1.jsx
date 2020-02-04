import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import Back from "./Back";

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      <React.Fragment>
        <Back onClick={this.goBack} />

        <Container>
          {/*using ? operator to determine what to show if the props defined in App.js are true*/
          this.props.dl ? (
            <React.Fragment>
              <Row>
                <p className="prompt">Driver's License Information</p>
                <p className="prompt">
                  Please input your driver's license information below
                </p>
                <p className="prompt">Driver's license number</p>
                <Input />
              </Row>
            </React.Fragment>
          ) : (
            ""
          )}
          {this.props.opc ? (
            <React.Fragment>
              <Row>
                <p className="prompt">Ontario Photo Card Information</p>
                <p className="prompt">
                  Please input your OPC information below
                </p>
                <p className="prompt">Ontario Photo Card number</p>
                <Input />
              </Row>
            </React.Fragment>
          ) : (
            ""
          )}
          {this.props.hc ? (
            <React.Fragment>
              <Row>
                <p className="prompt">Health Card Information</p>
                <p className="prompt">
                  Please input your Health Card information below
                </p>
                <p className="prompt">Health Card number</p>
                <Input />
              </Row>
            </React.Fragment>
          ) : (
            ""
          )}
        </Container>
      </React.Fragment>
    );
  }
}
export default withRouter(Step1);
