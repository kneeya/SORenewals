import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";

export default class Step1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          {this.props.dl ? (
            <React.Fragment>
              <Row>
                <p>dlswag</p>
              </Row>
            </React.Fragment>
          ) : (
            ""
          )}
          {this.props.opc ? (
            <React.Fragment>
              <Row>
                <p>opcswag</p>
              </Row>
            </React.Fragment>
          ) : (
            ""
          )}
          {this.props.hc ? (
            <React.Fragment>
              <Row>
                <p>hcswag</p>
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
