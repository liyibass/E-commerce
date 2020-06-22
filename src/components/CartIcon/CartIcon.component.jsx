import React from "react";
import "./CartIcon.style.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

function CartIcon() {
  const cartHidden = useSelector((state) => state.cartToggle.cartHidden);
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <i className="shopping-icon fas fa-shopping-cart fa-2x"></i>
      <span className="item-count">0</span>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return { cartHidden: state.cartToggle.cartHidden };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleCartHidden: () => dispatch(toggleCartHidden()),
//   };
// };

export default CartIcon;
