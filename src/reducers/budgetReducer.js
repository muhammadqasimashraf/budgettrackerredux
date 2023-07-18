// budgetReducer.js

import { ADD_BUDGET } from "../actions/BudgetActiontypes";

const initialState = {
  budgetList: [],
  total: 0,
};

const budgetReducer = (state = initialState, action) => {
  console.log(
    "action payload",
    action.payload,
    "action payload amount",
    action.payload
  );
  console.log("state in reducer is", state, "action is ", action);
  switch (action.type) {
    case ADD_BUDGET:
      const newBudgetList = [...state.budgetList, action.payload];
      const newTotal = state.total + action.payload;
      return {
        ...state,
        budgetList: newBudgetList,
        total: newTotal,
      };
    default:
      return state;
  }
};

export default budgetReducer;
