import React, { Component } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class Header extends Component {
  state = {
    imgUrl: "/logos.png"
  };
  render() {
    return (
      <React.Fragment>
        <div className="container no-padding">
          <div className="col">
            <div className="row">
              <div className="col">
                <a href="/">
                  {" "}
                  <img
                    class="ontario"
                    src={this.state.imgUrl}
                    alt="logo"
                    style={{ width: 11 + "rem", marginTop: "0.6rem" }}
                  />
                </a>
              </div>
              <div className="col">
                <div className="frenchie">FR</div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default Header;
