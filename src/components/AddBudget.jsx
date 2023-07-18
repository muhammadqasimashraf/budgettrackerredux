import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import AddEditBudgetForm from "../components/AddEditForm";
import { addBudget } from "../actions/budgetActions";
import budgetReducer from "../reducers/budgetReducer";

const AddBudget = ({ total, budgetList, addBudget }) => {
  console.log(budgetList, "BudgetList is ");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [budget, setBudget] = useState({ id: null, title: "", amount: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget({ ...budget, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBudget(budget);
    handleClose();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Budget Tracker</h2>
          <div>Total budget is: {total}</div>
        </div>
        <div className="col-md-6">
          <Button variant="dark" onClick={handleShow} className="mb-3">
            Add Budget
          </Button>
          {show && (
            <AddEditBudgetForm
              budget={budget}
              handleClose={handleClose}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          )}
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {budgetList.map((budget) => (
                <tr key={budget.id}>
                  <td>{budget.title}</td>
                  <td>{budget.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "Inside proplist");
  return {
    total: state.total,
    budgetList: state.budgetList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBudget: (budget) => dispatch(budgetReducer(budget)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBudget);
