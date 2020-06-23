import React from "react";
import "./CartItem.styles.scss";

function CartItem({ item: { imageUrl, price, name, quantity } }) {
  return (
    <div className="CartItem">
      <img src={imageUrl} alt="item" />
      <div className="CartItem-details">
        <span className="CartItem-details-name">{name}</span>
        <span className="CartItem-details-price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
