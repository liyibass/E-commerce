import React from "react";
import "./CheckoutItem.styles.scss";
import { useDispatch } from "react-redux";
import {
  addCartItems,
  minusCartItems,
  deleteItemFromCart,
} from "../../redux/cart/cart.action";
// import { increaseItemQuantity } from "../../redux/cart/cart.utils";

function CheckoutItem({ item }) {
  const { imageUrl, price, name, quantity } = item;
  const dispatch = useDispatch();
  return (
    <div className="CheckoutItem">
      <span className="CheckoutItem-details image-container">
        <img className="CheckoutItem-img" src={imageUrl} alt="item" />
      </span>

      <span className="CheckoutItem-details">{name}</span>
      <span className="CheckoutItem-details CheckoutItem-details-quantity">
        <i
          className="fas fa-chevron-left"
          onClick={() => dispatch(minusCartItems(item))}
        ></i>
        {quantity}
        <i
          className="fas fa-chevron-right"
          onClick={() => dispatch(addCartItems(item))}
        ></i>
      </span>
      <span className="CheckoutItem-details">${price}</span>
      <span className="CheckoutItem-details">
        <i
          className="far fa-trash-alt remove-button"
          onClick={() => dispatch(deleteItemFromCart(item))}
        ></i>
      </span>
    </div>
  );
}

export default CheckoutItem;
