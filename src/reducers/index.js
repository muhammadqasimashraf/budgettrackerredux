import isLogged from "./isLogged";
import { combineReducers } from "redux";
import userReducer from "./userReducer";

const allReducers = combineReducers({
  // isLogged: isLogged,
  userReducer: userReducer,
});
export default allReducers;
