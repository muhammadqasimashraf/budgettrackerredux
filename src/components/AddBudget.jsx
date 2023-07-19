import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import AddEditBudgetForm from "../components/AddEditForm";
import { addBudget } from "../actions/budgetActions";
import budgetReducer from "../reducers/budgetReducer";

const AddBudget = () => {
  const list = useSelector((state) => state?.budgetReducer?.budgetList);
  console.log("list is", list);
  const dispatch = useDispatch();
  console.log("state", list);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [budget, setBudget] = useState({
    title: "",
    amount: 0,
    credit: 0,
    debit: 0,
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
    // addBudget(budget);
    handleClose();
    dispatch(addBudget(budget));

    setBudget({ title: "", amount: 0, credit: 0, debit: 0, total: 0 });
  };

  return (
    <div className="container outerContainer mt-5">
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

                <th scope="col">Budget</th>
              </tr>
            </thead>

            {list?.map((budget, index) => {
              console.log("budget in buget", budget);

              return (
                <tbody>
                  <tr key={budget.id}>
                    <td className="serialNo">{index}</td>
                    <td className="mr-2">{budget?.budget?.title}</td>

                    <td className="bg-danger">{budget?.budget?.credit}</td>

                    <td>
                      <Button variant="dark" className="editBtn">
                        Edit
                      </Button>

                      <Button variant="dark">Delete</Button>
                    </td>
                  </tr>
                  <tr key={budget.id}>
                    <td className="serialNo">{index}</td>
                    <td className="mr-2">{budget?.budget?.title}</td>

                    <td className="bg-success">{budget?.budget?.debit}</td>
                    <td>
                      <Button variant="dark" className="editBtn">
                        Edit
                      </Button>

                      <Button variant="dark">Delete</Button>
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
          {list.map((item) => {
            return (budgetTotal = +item.budget.debit + budgetTotal);
          })}
        </div>
      </div>
    </div>
  );
};

export default AddBudget;
