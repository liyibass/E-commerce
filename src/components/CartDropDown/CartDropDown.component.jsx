import React, { Component } from "react";
import "./CartDropDown.style.scss";
import CustomButton from "../custom-button/custom-button.component";

export default class CartDropDown extends Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>CHECKOUT</CustomButton>
      </div>
    );
  }
}
