import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import {thunk} from "redux-thunk";
import { allReducers } from "./reducers/index.js";

export default configureStore({reducer: allReducers}, applyMiddleware(thunk));