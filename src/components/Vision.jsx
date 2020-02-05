import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";

class Vision extends Component {
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
          <Row>
            <h2 className="sub-header">
              Do you require glasses or contact lenses to drive?
            </h2>
          </Row>
          <Row>
            <Radio value="Yes"></Radio>
            <Radio value="No"></Radio>
          </Row>
          <Link to="">
            <Button>Next</Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Vision);
