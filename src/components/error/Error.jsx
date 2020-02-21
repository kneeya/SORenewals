import { Row, Container, Col } from "react-bootstrap";
import React, { Component } from "react";
import "../../App.css";
import "./Error.css";

export default class Error extends Component {
  render() {
    return (
      <Container className="error-container">
        <Row>
          <img
            className="error-symbol"
            src="/error-exclaim-big.svg"
            alt="error symbol"
          />
          <div className="error-header">There is a problem</div>
        </Row>
        <Row>
          <Col>
            <p className="check-entries">
              Please check your entries in these fields:
            </p>
          </Col>
        </Row>
        <Row>
          <ul>
            {this.props.bul1 ? (
              <a href={this.props.id1}>
                <li className="error-list">{this.props.bul1}</li>
              </a>
            ) : (
              ""
            )}

            {this.props.bul2 ? (
              <a href={this.props.id2}>
                <li className="error-list">{this.props.bul2}</li>
              </a>
            ) : (
              ""
            )}
          </ul>
        </Row>
      </Container>
    );
  }
}
