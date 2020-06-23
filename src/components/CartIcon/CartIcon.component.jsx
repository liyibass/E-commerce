import React from "react";
import "./CartIcon.style.scss";
import { useSelector } from "react-redux";
// import { toggleCartHidden } from "../../redux/cart/cart.action";

function CartIcon(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  // 累加商品數量
  //reduce（（前次變數，變數）=>前次變數+變數，前次變數初始值）
  const cartItemsCount = cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );

  return (
    <div className="cart-icon">
      <i className="shopping-icon fas fa-shopping-cart fa-2x"></i>
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
}

export default React.memo(CartIcon);
