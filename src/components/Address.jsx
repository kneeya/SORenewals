import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class Address extends Component {
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
        <div class="address">
          <Back onClick={this.goBack} />
          <Container>
            <Row>
              <h2>
                <strong>
                  1. Has your address changed in the last 90 days?
                </strong>{" "}
                (required)
              </h2>
              <br />
              <div class="ontario-form-group">
                <fieldset
                  class="ontario-fieldset"
                  aria-describedby="renewal-hint"
                >
                  <legend class="ontario-fieldset__legend ontario-fieldset__legend--large"></legend>
                  <div class="ontario-radios">
                    <div class="ontario-radios__item">
                      <input
                        required
                        class="ontario-input ontario-radios__input"
                        id="1-year-renewal"
                        name="licence-renewal"
                        type="radio"
                        value="1-year"
                      />
                      <label
                        class="ontario-label ontario-radios__label"
                        for="1-year-renewal"
                      >
                        <strong>Yes</strong>
                      </label>
                    </div>
                    <div class="ontario-radios__item">
                      <input
                        class="ontario-input ontario-radios__input"
                        id="2-year-renewal"
                        name="licence-renewal"
                        type="radio"
                        value="2-years"
                      />
                      <label
                        class="ontario-label ontario-radios__label"
                        for="2-year-renewal"
                      >
                        <strong>No</strong>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </Row>
            <Link to="/elig">Next</Link>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Address);
