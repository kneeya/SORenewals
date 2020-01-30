import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Step1 from "./components/Step1.jsx";
import ReactBootstrap from "react-bootstrap";
import { Container } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getInfo = (dlcheck, healthcheck, photocheck) => {
    let showThis = this.state;
    showThis = { showdl: dlcheck, showhc: healthcheck, showopc: photocheck };
    this.setState(showThis);
  };

  render() {
    return (
      <React.Fragment>
        <Container fluid className="header-bg">
          <Header />
        </Container>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  showerror={this.state.fail}
                  sendInfo={this.getInfo.bind(this)}
                />
              )}
            />
            <Route
              exact
              path="/step1"
              render={() =>
                this.state.showdl || this.state.showhc || this.state.showopc ? (
                  <Step1
                    dl={this.state.showdl}
                    hc={this.state.showhc}
                    opc={this.state.showopc}
                  />
                ) : (
                  (this.setState({ fail: true }), (<Redirect to="/" />))
                )
              }
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
