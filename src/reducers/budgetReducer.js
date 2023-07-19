// budgetReducer.js

//import { ADD_BUDGET } from "../actions/BudgetActiontypes";

const initialState = {
  budgetList: [],
  total: 0,
  credit: 0,
};

const budgetReducer = (state = initialState, action) => {
  console.log("state in reducer is", state, "action is ", action);
  console.log(action.type, "actiontypereducer");
  switch (action.type) {
    case "ADD_BUDGET":
      const newBudgetList = [...state.budgetList, action.payload];
      const newTotal = state.total + action.payload;
      const newCredit = state.credit + action.payload;
      return {
        ...state,
        budgetList: newBudgetList,
        total: newTotal,
        credit: newCredit,
      };
    default:
      return state;
  }
};

export default budgetReducer;
