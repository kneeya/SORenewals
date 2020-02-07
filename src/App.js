import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Step1 from "./components/Step1.jsx";
import ReactBootstrap from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
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
import MedCon from "./components/MedCon.jsx";
import Contact from "./components/Contact.jsx";
import FiveMos from "./components/FiveMos.jsx";
import Notify from "./components/Notify.jsx";
import Ineligible from "./components/Ineligible.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //call back fct to get info from Home.jsx that will be sent to Step1.jsx to determine which prods to show
  getInfo = (dlcheck, healthcheck, photocheck) => {
    let showThis = this.state;
    showThis = { showdl: dlcheck, showhc: healthcheck, showopc: photocheck };
    this.setState(showThis);
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
                  this.state.showdl ? <ByP /> : <Redirect to="/healthcard" />
                }
              />
              <Route /* using ? operator and the dl, hc and opc states of App.js to determine if user can proceed*/
                exact
                path="/step1"
                render={() => (
                  <Step1
                    showhc={this.state.showhc}
                    showdl={this.state.showdl}
                    showopc={this.state.showopc}
                  />
                )}
              />
              <Route
                exact
                path="/step2"
                render={() => (
                  <Step2 /* sending the state of app.js to step.jsx as properties*/
                    showhc={this.state.showhc}
                    showdl={this.state.showdl}
                    showopc={this.state.showopc}
                  />
                )}
              />
              <Route exact path="/postal" component={Postal} />
              {/* <Route
                exact
                path="/hc"
                render={() =>
                  this.state.showhc ? <Step2 /> : <Redirect to="/elig" />
                }
              /> */}
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
                path="/med-con"
                render={() => <MedCon showhc={this.state.showhc} />}
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
              <Route path="/ineligible" component={Ineligible} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/notify-so"
                render={() => (
                  <Notify
                    showdl={this.state.showdl}
                    showhc={this.state.showhc}
                    showopc={this.state.showopc}
                  />
                )}
              />{" "}
            </Switch>
          </BrowserRouter>
        </div>
        <div class="clearfooter"></div>
        <div class="footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
