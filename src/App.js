import React, { Component, useEffect } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Step1 from "./components/Step1.jsx";
import ReactBootstrap from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  useLocation
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Eligibility from "./components/Eligibility.jsx";
import Landing from "./components/Landing.jsx";
import Step2 from "./components/Step2.jsx";
import Healthcard from "./components/Healthcard.jsx";
import Postal from "./components/Postal.jsx";
import TnC from "./components/TnC.jsx";
import ByP from "./components/ByP.jsx";
import Vision from "./components/Vision.jsx";
import Vision2 from "./components/Vision2";
import MedCon from "./components/MedCon.jsx";
import MedCon2 from "./components/MedCon2.jsx";
import Contact from "./components/Contact.jsx";
import FiveMos from "./components/FiveMos.jsx";
import Notify from "./components/Notify.jsx";
import Ineligible from "./components/Ineligible.jsx";
import IneligibleFiveMos from "./components/XFiveMos.jsx";
import Ineligible3 from "./components/XMedCon.jsx";
import OPCinput from "./components/OPCinput.jsx";
import PDFViewer from "./components/PDFViewer/PDFViewer";
import Review from "./components/Review.jsx";
import NextSteps from "./components/NextSteps.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dl: "" };
  }

  //call back fct to get info from Home.jsx that will be sent to Step1.jsx to determine which prods to show
  getInfo = (dlcheck, healthcheck, photocheck) => {
    let showThis = this.state;
    showThis = { showdl: dlcheck, showhc: healthcheck, showopc: photocheck };
    this.setState(showThis);
  };

  getContact = (uemail, uphone) => {
    let setContact = this.state;
    setContact = { email: uemail, phone: uphone };
    this.setState(setContact);
  };
  getRContact = (remail, rphone, rvoice) => {
    let reminder = this.state;
    reminder = { remail: remail, rphone: rphone, rvoice: rvoice };
    this.setState(reminder);
  };
  getDL = (udl, utrill) => {
    let dlNum = this.state;
    dlNum = { dl: udl, trill: utrill };
    this.setState(dlNum);
  };

  getHC = (uhc, unchar) => {
    let hcNum = this.state;
    hcNum = { hc: uhc, hnchar: unchar };
    this.setState(hcNum);
  };

  getOPC = (uopc, unchar) => {
    let opcNum = this.state;
    opcNum = { opc: uopc, nchar: unchar };
    this.setState(opcNum);
  };

  render() {
    return (
      <React.Fragment>
        <div id="container">
          <Container fluid className="header-bg">
            <Header />
          </Container>
          <div class="so-logo">
            <Row class="so-logo1">
              <img width="225" height="55" src="/logoSO.png" alt="SO-logo" />
            </Row>
          </div>

          <BrowserRouter /*using react-router to manage links and navigation of pages based on user interaction*/
          >
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/terms-and-conditions" component={TnC} />
              <Route /*using render=() to send props while using react router*/
                exact
                path="/home"
                render={() => (
                  <Home /* sending state and getInfo fct of App.js to Home.jsx as properties to allow them to be used in Home.jsx as props*/
                    showerror={this.state.fail}
                    sendInfo={this.getInfo.bind(this)}
                  />
                )}
              />
              <Route
                exact
                path="/before-you-proceed"
                render={() =>
                  !this.state.showopc ? (
                    <ByP
                      showdl={this.state.showdl}
                      showhc={this.state.showhc}
                      showopc={this.state.showopc}
                    />
                  ) : (
                    <Redirect to="/elig" />
                  )
                }
              />
              {/* <Route path="before-you-proceed-hc" component={ByPhc} /> */}
              <Route /* using ? operator and the dl, hc and opc states of App.js to determine if user can proceed*/
                exact
                path="/step1"
                render={() => (
                  <Step1
                    showhc={this.state.showhc}
                    showdl={this.state.showdl}
                    showopc={this.state.showopc}
                    sendDL={this.getDL.bind(this)}
                    dl={this.state.dl}
                    trill={this.state.trill}
                  />
                )}
              />
              <Route
                exact
                path="/step2"
                render={() => (
                  <Step2 /* sending the state of app.js to step2.jsx as properties*/
                    showhc={this.state.showhc}
                    showdl={this.state.showdl}
                    showopc={this.state.showopc}
                    sendHC={this.getHC.bind(this)}
                    hc={this.state.hc}
                    hnchar={this.state.hnchar}
                  />
                )}
              />
              <Route
                path="/pc-input"
                render={() => (
                  <OPCinput
                    sendOPC={this.getOPC.bind(this)}
                    opc={this.state.opc}
                    nchar={this.state.nchar}
                  />
                )}
              />
              <Route exact path="/postal" component={Postal} />
              <Route
                exact
                path="/healthcard"
                render={() =>
                  this.state.showhc &&
                  !this.state.showdl &&
                  !this.state.showopc ? (
                    <Healthcard
                      dl={this.state.showdl}
                      hc={this.state.showhc}
                      opc={this.state.showopc}
                      sendDL={this.getDL.bind(this)}
                      sendOPC={this.getOPC.bind(this)}
                    />
                  ) : (
                    <Redirect to="/step2" />
                  )
                }
              />
              <Route
                exact
                path="/elig"
                render={() => (
                  <Eligibility
                    showdl={this.state.showdl}
                    showhc={this.state.showhc}
                    showopc={this.state.showopc}
                  />
                )}
              />
              <Route
                path="/vision"
                render={() => (
                  <Vision
                    showdl={this.state.showdl}
                    showhc={this.state.showhc}
                    showopc={this.state.showopc}
                  />
                )}
              />
              <Route
                path="/vision2"
                render={() => (
                  <Vision2
                    showdl={this.state.showdl}
                    showhc={this.state.showhc}
                    showopc={this.state.showopc}
                  />
                )}
              />
              <Route
                path="/med-con"
                render={() => <MedCon showhc={this.state.showhc} />}
              />
              <Route
                path="/med-con2"
                render={() => <MedCon2 showhc={this.state.showhc} />}
              />
              <Route
                path="/five-mos"
                render={() => (
                  <FiveMos
                    showdl={this.state.showdl}
                    showhc={this.state.showhc}
                    showopc={this.state.showopc}
                  />
                )}
              />
              <Route
                path="/ineligible"
                render={() => (
                  <Ineligible
                    showdl={this.state.showdl}
                    showhc={this.state.showhc}
                    showopc={this.state.showopc}
                  />
                )}
              />
              <Route
                path="/ineligible2"
                render={() => (
                  <IneligibleFiveMos
                    showdl={this.state.showdl}
                    showhc={this.state.showhc}
                    showopc={this.state.showopc}
                  />
                )}
              />
              <Route
                path="/ineligible3"
                render={() => (
                  <Ineligible3
                    showdl={this.state.showdl}
                    showhc={this.state.showhc}
                    showopc={this.state.showopc}
                  />
                )}
              />
              <Route
                path="/contact"
                render={() => (
                  <Contact
                    hc={this.state.hc}
                    sendContact={this.getContact.bind(this)}
                  />
                )}
              />
              <Route
                path="/notify-so"
                render={() => (
                  <Notify
                    email={this.state.email}
                    phone={this.state.phone}
                    sendRContact={this.getRContact.bind(this)}
                  />
                )}
              />{" "}
              <Route
                path="/review"
                render={() => (
                  <Review
                    phone={this.state.phone}
                    email={this.state.email}
                    dl={this.state.dl}
                    hc={this.state.hc}
                    opc={this.state.opc}
                    remail={this.state.remail}
                    rphone={this.state.rphone}
                    rvoice={this.state.rvoice}
                    sendContact={this.getContact.bind(this)}
                    sendRContact={this.getRContact.bind(this)}
                  />
                )}
              />
              <Route
                path="/next-steps"
                render={() => (
                  <NextSteps
                    showdl={this.state.showdl}
                    showhc={this.state.showhc}
                    showopc={this.state.showopc}
                  />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
        <div class="clearfooter"></div>
        <div class="footer">
          <Footer />
        </div>
        {/* <div className="App">
          <PDFViewer />
        </div> */}
      </React.Fragment>
    );
  }
}
