import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../asset/original.svg";

import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropDown from "../CartDropDown/CartDropDown.component";

function Header({ currentUser, cartHidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartHidden ? null : <CartDropDown />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    cartHidden: state.cartToggle.cartHidden,
  };
};

export default connect(mapStateToProps)(Header);
