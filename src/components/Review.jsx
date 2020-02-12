import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import "./success/success.css";
import "../App.css";

class Review extends Component {
  state = {
    voicedisabled: false,
    fail: false
  };
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }
  onSubmit() {
    if (this.state.voicedisabled && this.props.showhc) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div class="landing-body">
        <React.Fragment>
          <Back onClick={this.goBack} />
          <h3>Review your details</h3>
          <div class="section">
            <strong>Card information</strong>
            {this.props.dl ? (
              <p>
                Driver's licence number: <br />
                {this.props.dl}
              </p>
            ) : (
              ""
            )}
            {this.props.opc ? (
              <p>
                Photo card number: <br />
                {this.props.opc}
              </p>
            ) : (
              ""
            )}
            {this.props.hc ? (
              <p>
                Health card number: <br />
                {this.props.hc}
              </p>
            ) : (
              ""
            )}
          </div>

          <hr />

          <div class="section">
            <strong>Contact Information</strong>
            <p>
              Email: <br /> {this.props.email}
            </p>
            {this.props.phone ? (
              <p>
                Phone number: <br />
                {this.props.phone}
              </p>
            ) : (
              ""
            )}
          </div>

          <hr />

          {this.props.remail || this.props.rphone || this.props.rvoice ? (
            <div class="section">
              <strong>Reminder information</strong>
              {this.props.remail ? (
                <p>
                  Email: <br />
                  {this.props.remail}
                </p>
              ) : (
                ""
              )}
              {this.props.rphone ? (
                <p>
                  Phone number: <br />
                  {this.props.rphone}
                </p>
              ) : (
                ""
              )}
              {this.props.rvoice ? (
                <p>
                  Phone number: <br />
                  {this.props.rvoice}
                </p>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}

          <hr />

          <div class="section">
            <strong>Mailing Address</strong>
            <p>
              Your new card(s) will be sent to the mailing address on file. We
              are unable to share that address for privacy and security reasons.
              <br />
              <br />
              If your address has changed, visit a ServiceOntario location to
              update your address and renew your card(s).
            </p>
          </div>

          <hr />

          <div class="section">
            <p>
              By clicking to next, you confirm that, to the best of your
              knowledge, the details you are providing are correct.
            </p>
          </div>

          <Link to="/next-steps" onClick={() => this.onSubmit()}>
            <Button>Next</Button>
          </Link>
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(Review);
