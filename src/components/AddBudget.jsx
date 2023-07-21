import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import AddEditBudgetForm from "../components/AddEditForm";
import { addBudget, deleteBudget, editBudget } from "../actions/budgetActions";

const AddBudget = () => {
  const list = useSelector((state) => state?.budgetReducer?.budgetList);
  console.log("list is", list);
  const dispatch = useDispatch();
  console.log("state", list);
  const [show, setShow] = useState(false);
  const [isDebit, setIsDebit] = useState(false);
  const [isCredit, setIsCredit] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  const handleClose = () => {
    setShow(false);
    setIsShowForm(false);
    setIsCredit(false);
    setIsDebit(false);
  };
  const handleShow = () => setShow(true);
  const [budget, setBudget] = useState({
    title: "",
    amount: 0,
    debit: 0,
    credit: 0,
  });
  const [total, setTotal] = useState(0);
  let budgetTotal = 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget({ ...budget, [name]: value });
  };

  console.log("budget", budget);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    dispatch(addBudget(budget));
    setBudget({ title: "", amount: 0, credit: 0, debit: 0 });
  };
  const handleEdit = (id) => {
    dispatch(editBudget(id));
  };

  return (
    <div className="container outerContainer mt-5">
      <div className="topBtn">
        <Button className="btn" onClick={handleShow} className="mb-3">
          Add Budget
        </Button>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-12">
          {show && (
            <AddEditBudgetForm
              budget={budget}
              handleClose={handleClose}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              isDebit={isDebit}
              isCredit={isCredit}
              isShowForm={isShowForm}
              setIsCredit={setIsCredit}
              setIsDebit={setIsDebit}
              setIsShowForm={setIsShowForm}
            />
          )}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Debit</th>
                <th scope="col">Credit</th>
              </tr>
            </thead>

            {list?.map((budget, index) => {
              return (
                <tbody key={budget.id}>
                  <tr>
                    <td className="serialNo">{index + 1}</td>
                    <td className="mr-2">{budget.budget.title}</td>
                    <td className="bg-success">{budget.budget.debit}</td>
                    <td className="bg-danger">{budget.budget.credit}</td>
                    <td>
                      <Button
                        className="editBtn btn"
                        onClick={handleEdit(budget.id)}
                      >
                        Edit
                      </Button>
                      <Button className="btn">Delete</Button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <div className="totalAmount">
        <div className="ml-2">
          <p className="ml-2">Balance is</p>
          {list?.reduce((acc, curr) => {
            return +curr.debit + acc;
          }, 0)}
        </div>
      </div>
    </div>
  );
};

export default AddBudget;
