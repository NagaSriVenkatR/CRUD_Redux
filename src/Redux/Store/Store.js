import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import Maths from "../Reducer/Maths";
import { compose } from "redux";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(Maths, composeEnhancer());
export default Store;
