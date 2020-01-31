import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link } from "react-router-dom";

export default class Step1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          {/*using ? operator to determine what to show if the props defined in App.js are true*/
          this.props.dl ? (
            <React.Fragment>
              <Row>
                <p class="prompt">Driver's License Information</p>
                <p class="prompt">
                  Please input your driver's license information below
                </p>
                <p class="prompt">Driver's license number</p>
                <Input />
              </Row>
            </React.Fragment>
          ) : (
            ""
          )}
          {this.props.opc ? (
            <React.Fragment>
              <Row>
                <p class="prompt">Ontario Photo Card Information</p>
                <p class="prompt">Please input your OPC information below</p>
                <p class="prompt">Ontario Photo Card number</p>
                <Input />
              </Row>
            </React.Fragment>
          ) : (
            ""
          )}
          {this.props.hc ? (
            <React.Fragment>
              <Row>
                <p class="prompt">Health Card Information</p>
                <p class="prompt">
                  Please input your Health Card information below
                </p>
                <p class="prompt">Health Card number</p>
                <Input />
              </Row>
            </React.Fragment>
          ) : (
            ""
          )}

          <Link to="/">Back</Link>
        </Container>
      </React.Fragment>
    );
  }
}
