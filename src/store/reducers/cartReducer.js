import { ADD_OR_UPDATE_CART, GET_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  cart: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OR_UPDATE_CART:
       { 
          const existingProdId = findProductIndex(state.cart, action.payload.prodId);
          return existingProdId ? 
          { ...state, cart:updateProductUnits(state.cart, existingProdId, action.payload.count ) } : 
          { ...state, cart: [...state.cart, action.payload] }; ;
       };
       break;
    case REMOVE_FROM_CART:
      return { ...state.cart, cart: action.payload };
    case GET_CART: return { ...state.cart, cart: action.payload };
    default:
      return state;
  }
};

const findProductIndex = (cart, productId) => {
    return cart.findIndex(p => p.id === productId);
}

const updateProductUnits = (cart, productIndex, newCount) => {
    cart[productIndex].count = newCount;
    return cart;
}