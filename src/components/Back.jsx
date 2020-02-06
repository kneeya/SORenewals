import { Row, Container, Col } from "react-bootstrap";
import React, { Component } from "react";
import styled from "styled-components";

const BackButton = styled.span`
  color: #0066cc;
  text-decoration: underline;
  cursor: pointer;
`;

class Back extends Component {
  render() {
    return (
      <Container style={{ paddingBottom: 1 + "rem" }}>
        <Row style={{ marginTop: 1 + "rem" }} onClick={this.props.onClick}>
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: 0.35 + "rem", marginRight: 0.15 + "rem" }}
          >
            <path
              d="M6 1L1.2635 4.9661C1.08786 5.11395 1.00003 5.30692 1 5.49991C0.999972 5.69295 1.0878 5.886 1.2635 6.0339L6 10"
              stroke="#0066CC"
              strokeWidth="2"
            />
          </svg>
          <BackButton>Back</BackButton>
        </Row>
      </Container>
    );
  }
}
export default Back;
