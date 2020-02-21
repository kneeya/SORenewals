import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";
import MaskedInput from "react-text-mask";

class Healthcard extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  state = {};
  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onSubmit() {
    if (!this.state.dlchecked && !this.state.opcchecked) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
  }

  handleDl() {
    this.setState({
      dlchecked: true
    });
    this.setState({
      opcchecked: false
    });
    this.setState({ fail: false });
  }

  handleOpc() {
    this.setState({
      dlchecked: false
    });
    this.setState({
      opcchecked: true
    });
    this.setState({ fail: false });
  }

  render() {
    return (
      <div className="landing-body">
        <React.Fragment>
          <Back onClick={this.goBack} />
          {this.state.fail ? (
            <Error id1="#bypopc" bul1="Before you proceed" />
          ) : (
            ""
          )}
          <div className={this.state.fail ? "error-content" : ""}>
            <React.Fragment>
              <div>
                <h2 id="bypopc" className="sub-header">
                  Verify your identity
                </h2>
              </div>
              <div>
                <p>
                  You need to have a valid driver's licence or photo card to
                  renew your health card
                </p>
              </div>

              <div>
                <p>Select one:</p>
              </div>
              {this.state.fail ? <ErrorMsg msg="You must choose one." /> : ""}
              <div>
                <Radio
                  value="Driver's licence"
                  onClick={() => this.handleDl()}
                />
              </div>

              <div>
                <Radio
                  value="Ontario photo card"
                  onClick={() => this.handleOpc()}
                />
              </div>
            </React.Fragment>
            {!this.state.dlchecked && !this.state.opcchecked ? (
              <Button onClick={() => this.onSubmit()}>Next</Button>
            ) : this.state.dlchecked ? (
              <Link to="/step1">
                <Button>Next</Button>
              </Link>
            ) : this.state.opcchecked ? (
              <Link to="/pc-input">
                <Button>Next</Button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(Healthcard);
