// budgetReducer.js

const initialState = {
  budgetList: [],
  total: 0,
  credit: 0,
  debit: 0,
};

const budgetReducer = (state = initialState, action) => {
  console.log("state in reducer is", state, "action is ", action);
  console.log(action.type, "actiontypereducer");
  switch (action.type) {
    case "ADD_BUDGET":
      const newBudgetList = [...state.budgetList, action.payload];
      const newTotal = state.total + action.payload.amount;
      const newCredit = state.credit + action.payload.credit;
      const newDebit = state.debit + action.payload.debit;
      return {
        ...state,
        budgetList: newBudgetList,
        total: newTotal,
        credit: newCredit,
        debit: newDebit,
      };
    case "DELETE_BUDGET":
      const updatedBudgetList = state.budgetList.filter(
        (budget, id) => budget.id !== action.payload.id
      );
      // const updatedTotal = state.total - action.payload.amount;
      // const updatedCredit = state.credit - action.payload.credit;
      // const updatedDebit = state.debit - action.payload.debit;
      return {
        ...state,
        budgetList: updatedBudgetList,
        total: updatedTotal,
        credit: updatedCredit,
        debit: updatedDebit,
      };

    default:
      return state;
  }
};

export default budgetReducer;
