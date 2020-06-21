import React, { useEffect } from "react";
import "./CartIcon.style.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

function CartIcon({ cartHidden, toggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <i className="shopping-icon fas fa-shopping-cart fa-2x"></i>
      <span className="item-count">0</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cartHidden: state.cartToggle.cartHidden };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
