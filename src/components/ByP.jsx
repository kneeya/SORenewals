import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter, Redirect } from "react-router-dom";
import Back from "./Back";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class ByP extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  state = {
    acknowledge: false,
    fail: false
  };

  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChecked() {
    let acknowledge = !this.state.acknowledge;
    this.setState({ acknowledge });
    this.setState({ fail: false });
  }

  onSubmit = () => {
    if (this.state.acknowledge === false) {
      this.setState({ fail: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div class="landing-body">
          <Back onClick={this.goBack} />
          {this.state.fail ? (
            <Error id1="#byp" bul1="Before you proceed" />
          ) : (
            ""
          )}
          <div className={this.state.fail ? "error-content" : ""}>
            <h3 id="byp">Before you proceed</h3>
            {this.state.fail ? (
              <ErrorMsg msg="Please confirm your understanding before proceeding" />
            ) : (
              ""
            )}

            {!this.props.showdl && this.props.showhc ? (
              <Form>
                <Row>
                  <Col xs={1}>
                    <Checkbox
                      class="checkbox"
                      onClick={() => this.handleChecked()}
                    ></Checkbox>
                  </Col>
                  <Col>
                    <p style={{ marginLeft: 1 + "rem" }}>
                      I acknowledge and understand that I will need a valid
                      driver's license or Ontario photo card to renew my health
                      card.
                    </p>
                  </Col>
                </Row>
              </Form>
            ) : (
              <Form>
                <Row>
                  <p style={{ marginLeft: 1 + "rem" }}>
                    This application will only renew your full licence(s). If
                    you have a G, M, or GM licence, these will be fully renewed
                    in this application.
                  </p>
                  <p style={{ marginLeft: 1 + "rem" }}>
                    If you have a combination licence, the renewal will only
                    apply to:
                  </p>
                  <ul>
                    <li>the G in a GM1 or GM2</li>
                    <li>the M in a G1M or G2M</li>
                  </ul>
                  <p
                    style={{ marginLeft: 1 + "rem", paddingBottom: 1 + "rem" }}
                  >
                    <a href="https://ontario.ca" target="_blank">
                      Learn more about licence classes.
                    </a>
                  </p>
                </Row>
                <Row>
                  <Col xs={1}>
                    <Checkbox
                      class="checkbox"
                      onClick={() => this.handleChecked()}
                    ></Checkbox>
                  </Col>
                  <Col>
                    <p style={{ marginTop: "0.2rem", marginLeft: "1rem" }}>
                      I acknowledge and understand that only the full class
                      portion of my driver's licence can be renewed online.
                    </p>
                  </Col>
                </Row>
              </Form>
            )}

            {this.state.acknowledge ? (
              <Link onClick={() => this.onSubmit()} to="/elig">
                <Button>Next</Button>
              </Link>
            ) : (
              <Button onClick={() => this.onSubmit()}>Next</Button>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(ByP);
