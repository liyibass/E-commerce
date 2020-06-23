import CartActionTypes from "./cart.types";

export const addCartItems = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const minusCartItems = (item) => ({
  type: CartActionTypes.MINUS_ITEM,
  payload: item,
});

export const deleteItemFromCart = (item) => ({
  type: CartActionTypes.DELETE_ITEM,
  payload: item,
});
