import CartActionTypes from "./cart.types";
import {
  addItemToCart,
  minusItemToCart,
  deleteItemFromCart,
} from "./cart.utils";

const initialState = {
  // cartHidden: true,
  cartItems: [],
  cartTotal: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CartActionTypes.TOGGLE_CART_HIDDEN:
    //   return { ...state, cartHidden: !state.cartHidden };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        // cartTotal: newPrice,
      };

    case CartActionTypes.MINUS_ITEM:
      return {
        ...state,
        cartItems: minusItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
