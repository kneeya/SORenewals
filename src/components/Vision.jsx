import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class Vision extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.handleNo = this.handleNo.bind(this);
    this.handleYes = this.handleYes.bind(this);
  }
  state = {};
  goBack() {
    this.props.history.goBack();
  }

  onSubmit() {
    if (!this.state.yes && !this.state.no) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
  }

  handleNo = () => {
    this.setState({ no: true, yes: false, fail: false });
  };

  handleYes = () => {
    this.setState({ yes: true, no: false, fail: false });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div class="landing-body">
          <Back onClick={this.goBack} />
          {this.state.fail ? (
            <Error bul1="Do you require corrective lenses to drive?" />
          ) : (
            ""
          )}
          <div className={this.state.fail ? "error-content" : ""}>
            <Row>
              <h3 style={{ marginLeft: 1 + "rem" }}>
                Do you require corrective lenses to drive?
              </h3>
            </Row>
            {this.state.fail ? (
              <ErrorMsg msg="You must choose one answer on this page and click next to continue." />
            ) : (
              ""
            )}
            <Row>
              <Col>
                <Radio value="Yes" onClick={() => this.handleYes()} />
                <Radio value="No" onClick={() => this.handleNo()} />
              </Col>
            </Row>
            {!this.state.no && !this.state.yes ? (
              <Button onClick={() => this.onSubmit()}>Next</Button>
            ) : this.props.showhc ? (
              <Link to="/step2" onClick={() => this.onSubmit()}>
                <Button>Next</Button>
              </Link>
            ) : (
              <Link to="/step1" onClick={() => this.onSubmit()}>
                <Button>Next</Button>
              </Link>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Vision);
