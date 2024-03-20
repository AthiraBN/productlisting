import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import { cartReducer } from './cartReducer'

export const allReducers = combineReducers({
  postsReducer: postsReducer,
  cartReducer: cartReducer
});
