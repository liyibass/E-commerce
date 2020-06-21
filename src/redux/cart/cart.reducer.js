import CartActionTypes from "./cart.types";

const initialState = {
  cartHidden: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, cartHidden: !state.cartHidden };

    default:
      return state;
  }
};

export default cartReducer;
