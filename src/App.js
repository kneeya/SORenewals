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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fail: false
    };
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
              <Route exact path="/" render={() => <Landing />} />
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
              <Route /* using ? operator and the dl, hc and opc states of App.js to determine if user can proceed*/
                exact
                path="/step1"
                render={() =>
                  this.state.showdl ||
                  this.state.showhc ||
                  this.state.showopc ? (
                    <Step1 /* sending the state of app.js to step.jsx as properties*/
                      dl={this.state.showdl}
                      hc={this.state.showhc}
                      opc={this.state.showopc}
                    />
                  ) : (
                    (this.setState({ fail: true }), (<Redirect to="/home" />))
                  )
                }
              />
              <Route exact path="/elig" component={Eligibility} />
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
