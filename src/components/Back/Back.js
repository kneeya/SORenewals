import { Row, Container } from "react-bootstrap";
import React from "react";
import styled from "styled-components";

const Back = ({ onClick }) => (
  <Container>
    <Row>
      <p onClick={onClick()}>Back</p>
    </Row>
  </Container>
);
export default Back;
