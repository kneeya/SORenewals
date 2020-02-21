import React, { Component } from "react";

import "./Radio.css";

class Radio extends Component {
  render() {
    return (
      <div class="ontario-form-group">
        <fieldset class="ontario-fieldset" aria-describedby="renewal-hint">
          <legend class="ontario-fieldset__legend ontario-fieldset__legend--large"></legend>
          <div class="ontario-radios">
            <div class="ontario-radios__item">
              <input
                required
                class="ontario-input ontario-radios__input"
                id="1-year-renewal"
                name="licence-renewal"
                type="radio"
                onClick={this.props.onClick}
              />
              <label class="ontario-label ontario-radios__label">
                <strong>{this.props.value}</strong>
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}
export default Radio;
