import { legacy_createStore as createStore ,applyMiddleware} from "redux";
import formReducer from "../Reducer/formReducer";
import { compose } from "redux";
// import {thunk}  from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  formReducer,
  composeEnhancer(applyMiddleware())
  );
export default Store;
