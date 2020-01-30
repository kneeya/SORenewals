import React, { Component } from "react";
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
                <img
                  src={this.state.imgUrl}
                  alt="logo"
                  style={{ width: 11 + "rem" }}
                />
              </div>
              <div className="col">
                <div className="frenchie">FR</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
