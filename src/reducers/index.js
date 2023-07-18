import isLogged from "./isLogged";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import budgetReducer from "./budgetReducer";

const allReducers = combineReducers({
  // isLogged: isLogged,
  userReducer: userReducer,
  budgetReducer: budgetReducer,
});
export default allReducers;
