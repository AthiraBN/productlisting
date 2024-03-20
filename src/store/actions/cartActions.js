export const ADD_OR_UPDATE_CART = "ADD_OR_UPDATE_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const GET_CART = "GET_CART"

export const addOrUpdateCart = (cartItem) => (dispatch) => {
  return dispatch({ type: ADD_OR_UPDATE_CART, payload: cartItem})
};

export const removeFromCart = (cartItem) => (dispatch) => {
  return dispatch({ type: REMOVE_FROM_CART, payload: cartItem})
};

export const getCart = () => (dispatch) => {
  return dispatch({ type: GET_CART, payload: []})
}