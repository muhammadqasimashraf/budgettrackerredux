import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import AddEditBudgetForm from "../components/AddEditForm";
import { addBudget } from "../actions/budgetActions";
import budgetReducer from "../reducers/budgetReducer";

const AddBudget = () => {
  const list = useSelector((state) => state?.budgetReducer?.budgetList);
  const dispatch = useDispatch();
  console.log("state", list);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [budget, setBudget] = useState({ title: "", amount: 0, total: 0 });
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudget({ ...budget, [name]: value });
  };

  console.log("budget", budget);
  const handleSubmit = (event) => {
    event.preventDefault();
    // addBudget(budget);
    handleClose();
    dispatch(addBudget(budget));
    setBudget({ title: "", amount: "" });
  };

  return (
    <div className="container mt-5">
      <div className="topBtn">
        <Button variant="dark" onClick={handleShow} className="mb-3 ">
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
            />
          )}
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((budget, index) => {
                console.log("budget in buget", budget);
                return (
                  <tr key={budget.id}>
                    <td className="serialNo">{index}</td>
                    <td className="mr-2">{budget?.budget?.title}</td>
                    <td>{budget?.budget?.amount}</td>
                    <td>{budget?.budget?.total}</td>
                    <td>
                      <Button variant="dark" className="editBtn">
                        Edit
                      </Button>

                      <Button variant="dark">Delete</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddBudget;
