// budgetActions.js
export const addBudget = (budget) => {
  return {
    type: "ADD_BUDGET",
    payload: { budget },
  };
};
export const deleteBudget = (key) => {
  return {
    type: "DELETE_BUDGET",
    payload: { key },
  };
};
export const editBudget = (budget) => {
  return {
    type: "EDIT_BUDGET",
    payload: { budget },
  };
};
