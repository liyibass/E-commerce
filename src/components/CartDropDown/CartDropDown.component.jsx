import React, { Component } from "react";
import "./CartDropDown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../CartItem/CartItem.component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartDropDown({ cartHidden, setCartHidden }) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem item={cartItem} key={cartItem.id} />;
          })
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>

      <div className="btnContainer" onClick={() => setCartHidden(!cartHidden)}>
        <Link to="/checkout">
          <CustomButton>CHECKOUT</CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default CartDropDown;
