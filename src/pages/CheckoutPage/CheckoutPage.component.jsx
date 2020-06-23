import React from "react";
import { useSelector } from "react-redux";
import "./CheckOutPage.styles.scss";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";

function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartTotal = cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.price * cartItem.quantity;
  }, 0);

  return (
    <div className="CheckoutPage">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem item={cartItem} key={cartItem.id} />;
      })}

      <div className="total">
        <span>TOTAL : $ {cartTotal}</span>
      </div>
    </div>
  );
}

export default React.memo(CheckoutPage);
