import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { FormGroup } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import "./success/success.css";
import "../App.css";
import Email from "../Form.js";
import * as emailjs from "emailjs-com";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class Review extends Component {
  state = {
    email: this.props.email,
    phone: this.props.phone,
    remail: this.props.remail,
    rphone: this.props.rphone,
    rvoice: this.props.rvoice,
    voicedisabled: false,
    emaildisabled: false,
    fail: false,
    editCemail: false,
    editCphone: false
  };
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.editCEmail = this.editCEmail.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }

  // onSubmit() {
  //   if (this.state.voicedisabled && this.props.showhc) {
  //     this.setState({ fail: true });
  //   } else {
  //     this.setState({ fail: false });
  //   }
  // }
  handleSubmit = e => {
    //   if (!this.state.emaildisabled) {
    //     const { email } = this.state;
    //     let templateParams = {
    //       to_name: email
    //     };
    //     emailjs.send(
    //       "gmail",
    //       "template_RLG3E76r",
    //       templateParams,
    //       "user_u3p3HFlbdGyXe6PNlzFis"
    //     );
    //     console.log("sent");
    //   }
  };
  // handleChange = (param, e) => {
  //   this.setState({ [param]: e.target.value });
  //};

  checkemail() {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var match = regex.exec(this.state.email);
    if (match) {
      this.setState({ emaildisabled: false, emailfail: false });
    } else {
      this.setState({ emaildisabled: true });
    }
  }
  checkvoice() {
    var regex = /^[(]?\d{3}[)]?[ -.]?\d{3}[ -.]?\d{4}$/;
    var match = regex.exec(this.state.phone);

    if (match) {
      this.setState({ voicedisabled: false, voicefail: false });
    } else {
      this.setState({ voicedisabled: true });
    }
  }
  handleCEmailChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ email: value });
  };

  handleCPhoneChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ phone: value });
  };
  editCEmail() {
    this.setState({ editCemail: true, emailfail: false });
  }
  cancelCEmail = () => {
    this.setState({ editCemail: false, voicefail: false });
  };
  handleCPhoneChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ phone: value });
  };
  editCPhone() {
    this.setState({ editCphone: true });
  }
  cancelCPhone = () => {
    this.setState({ editCphone: false });
  };
  handleREmailChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ remail: value });
  };
  editREmail() {
    this.setState({ editRemail: true });
  }
  cancelREmail = () => {
    this.setState({ editRemail: false });
  };
  handleRPhoneChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ rphone: value });
  };
  editRPhone() {
    this.setState({ editRphone: true });
  }
  cancelRPhone = () => {
    this.setState({ editRphone: false });
  };

  handleRVoiceChange = e => {
    const {
      target: { value }
    } = e;
    this.setState({ rvoice: value });
  };
  editRVoice = () => {
    this.setState({ editRvoice: true });
  };
  cancelRVoice = () => {
    this.setState({ editRvoice: false });
  };

  onRemSave = () => {
    this.props.sendRContact(
      this.state.remail,
      this.state.rphone,
      this.state.rvoice
    );
    this.setState({ editRemail: false, editRphone: false, editRvoice: false });
  };

  onConSave = () => {
    if (!this.state.emaildisabled && !this.state.voicedisabled) {
      //sending email and phone number to app.js to use in notify and review details page
      this.props.sendContact(this.state.email, this.state.phone);
      this.setState({ editCemail: false });
      this.setState({ editCphone: false });
    } else if (this.state.emaildisabled) {
      this.setState({ emailfail: true });
    } else if (this.state.voicedisabled) {
      this.setState({ voicefail: true });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div class="landing-body">
        <React.Fragment>
          <Back onClick={this.goBack} />
          <h3>Review your details</h3>
          {this.state.voicefail && this.state.emailfail ? (
            <Error
              id1="#reviewemail"
              id2="reviewpn"
              bul1="Email"
              bul2="Phone number"
            />
          ) : this.state.emailfail && !this.state.voicefail ? (
            <Error id1="#reviewemail" bul1="Email" />
          ) : this.state.voicefail && !this.state.emailfail ? (
            <Error id1="#reviewpn" bul1="Phone number" />
          ) : (
            ""
          )}
          <div class="section">
            <strong>Card information</strong>
            {this.props.dl ? (
              <p>
                Driver's licence number: <br />
                {"***** ***** " + this.props.dl.slice(-5)}
              </p>
            ) : (
              ""
            )}
            {this.props.opc ? (
              <p>
                Photo card number: <br />
                {"*** **** " + this.props.opc.slice(-5)}
              </p>
            ) : (
              ""
            )}
            {this.props.hc ? (
              <p>
                Health card number: <br />
                {"**** *** " + this.props.hc.slice(-6)}
              </p>
            ) : (
              ""
            )}
          </div>

          <hr />

          <div className="section">
            <strong>Contact Information</strong>
            <div className="info-sect">
              <div>
                <p>Email:</p>
                {this.state.emailfail ? (
                  <div>
                    <ErrorMsg msg="" />
                    <p id="reviewemail" class="weird-one-line-err">
                      Please provide a valid email
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {this.state.editCemail ? (
                  <React.Fragment>
                    <FormGroup initialstate={this.props.email}>
                      <input
                        value={this.state.email}
                        onChange={this.handleCEmailChange}
                        onBlur={() => this.checkemail()}
                      />
                    </FormGroup>
                    <div className="edit-buttons">
                      <Button onClick={this.onConSave}>Save</Button>

                      <p className="cancel-button" onClick={this.cancelCEmail}>
                        Cancel
                      </p>
                    </div>
                  </React.Fragment>
                ) : (
                  <p>{this.props.email}</p>
                )}
              </div>

              {this.state.editCemail ? (
                ""
              ) : (
                <p className="info-edit" onClick={() => this.editCEmail()}>
                  Edit
                </p>
              )}
            </div>
            {this.props.phone ? (
              <div className="info-sect">
                <div>
                  <p id="reviewpn">Phone number:</p>
                  {this.state.voicefail ? (
                    <ErrorMsg msg="Please provide a phone number" />
                  ) : (
                    ""
                  )}
                  {this.state.editCphone ? (
                    <React.Fragment>
                      <FormGroup initialstate={this.props.phone}>
                        <input
                          value={this.state.phone}
                          onChange={this.handleCPhoneChange}
                          onBlur={() => this.checkvoice()}
                        />
                      </FormGroup>
                      <div className="edit-buttons">
                        <Button onClick={this.onConSave}>Save</Button>

                        <p
                          className="cancel-button"
                          onClick={this.cancelCPhone}
                        >
                          Cancel
                        </p>
                      </div>
                    </React.Fragment>
                  ) : (
                    <p>{this.props.phone}</p>
                  )}
                </div>
                {this.state.editCphone ? (
                  ""
                ) : (
                  <p className="info-edit" onClick={() => this.editCPhone()}>
                    Edit
                  </p>
                )}
              </div>
            ) : (
              ""
            )}
          </div>

          <hr />

          {this.props.remail || this.props.rphone || this.props.rvoice ? (
            <div class="section">
              <strong>Reminder information</strong>
              {this.props.remail ? (
                <div className="info-sect">
                  <div>
                    <p>Email: </p>
                    {this.state.editRemail ? (
                      <React.Fragment>
                        <FormGroup initialstate={this.props.remail}>
                          <input
                            type="email"
                            name="email"
                            value={this.state.remail}
                            onChange={this.handleREmailChange}
                            onBlur={() => this.checkemail()}
                          />
                        </FormGroup>
                        <div className="edit-buttons">
                          <Button onClick={this.onRemSave}>Save</Button>

                          <p
                            className="cancel-button"
                            onClick={this.cancelREmail}
                          >
                            Cancel
                          </p>
                        </div>
                      </React.Fragment>
                    ) : (
                      <p>{this.props.remail}</p>
                    )}
                  </div>
                  {this.state.editRemail ? (
                    ""
                  ) : (
                    <p className="info-edit" onClick={() => this.editREmail()}>
                      Edit
                    </p>
                  )}
                </div>
              ) : (
                ""
              )}
              {this.props.rphone ? (
                <div className="info-sect">
                  <div>
                    <p>Phone number:</p>
                    {this.state.editRphone ? (
                      <React.Fragment>
                        <FormGroup initialstate={this.props.rphone}>
                          <input
                            value={this.state.rphone}
                            onChange={this.handleRPhoneChange}
                            onBlur={() => this.checkvoice()}
                          />
                        </FormGroup>
                        <div className="edit-buttons">
                          <Button onClick={this.onRemSave}>Save</Button>

                          <p
                            className="cancel-button"
                            onClick={this.cancelRPhone}
                          >
                            Cancel
                          </p>
                        </div>
                      </React.Fragment>
                    ) : (
                      <p>{this.props.rphone}</p>
                    )}
                  </div>
                  {this.state.editRphone ? (
                    ""
                  ) : (
                    <p className="info-edit" onClick={() => this.editRPhone()}>
                      Edit
                    </p>
                  )}
                </div>
              ) : (
                ""
              )}
              {this.props.rvoice ? (
                <div className="info-sect">
                  <div>
                    <p>Phone number:</p>
                    {this.state.editRvoice ? (
                      <React.Fragment>
                        <FormGroup initialstate={this.props.rvoice}>
                          <input
                            value={this.state.rvoice}
                            onChange={this.handleRVoiceChange}
                            onBlur={() => this.checkvoice()}
                          />
                        </FormGroup>
                        <div className="edit-buttons">
                          <Button onClick={this.onRemSave}>Save</Button>

                          <p
                            className="cancel-button"
                            onClick={this.cancelRVoice}
                          >
                            Cancel
                          </p>
                        </div>
                      </React.Fragment>
                    ) : (
                      <p>{this.props.rvoice}</p>
                    )}
                  </div>
                  {this.state.editRvoice ? (
                    ""
                  ) : (
                    <p className="info-edit" onClick={() => this.editRVoice()}>
                      Edit
                    </p>
                  )}
                </div>
              ) : (
                ""
              )}
              <hr />
            </div>
          ) : (
            ""
          )}

          <div class="section">
            <strong>Mailing Address</strong>
            <p>
              Your new card(s) will be sent to the mailing address on file. We
              are unable to share that address for privacy and security reasons.
              <br />
              <br />
              If your address has changed,{" "}
              <a
                target="_blank"
                href="https://www.ontario.ca/page/serviceontario-locations-hours-and-contact"
              >
                Visit a ServiceOntario location
              </a>{" "}
              to update your address and renew your card(s).
            </p>
          </div>

          <hr />

          <div class="section">
            <p>
              By clicking to next, you confirm that, to the best of your
              knowledge, the details you are providing are correct.
            </p>
          </div>

          <Link to="/next-steps" onClick={() => this.handleSubmit()}>
            <Button>Next</Button>
          </Link>
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(Review);
