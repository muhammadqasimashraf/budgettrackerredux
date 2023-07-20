import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddEditBudgetForm = ({
  budget,
  handleClose,
  handleSubmit,
  handleChange,
  isDebit,
  isCredit,
  isShowForm,
  setIsCredit,
  setIsDebit,
  setIsShowForm,
}) => {
  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{budget.id ? "Edit Budget" : "Add Budget"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button
          className="btn"
          onClick={() => {
            setIsShowForm(true);
            setIsDebit(true);
            setIsCredit(false);
          }}
        >
          Debit
        </Button>
        <Button
          className="btn"
          onClick={() => {
            setIsShowForm(true);
            setIsCredit(true);
            setIsDebit(false);
          }}
        >
          Credit
        </Button>
        {isShowForm && (
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Budget Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Budget Title"
                autoFocus
                value={budget.title}
                onChange={handleChange}
              />
            </Form.Group>

            {isCredit && (
              <Form.Group controlId="formAmount">
                <Form.Label>Credit</Form.Label>
                <Form.Control
                  type="number"
                  name="credit"
                  placeholder="Enter Credit Amounte y"
                  value={budget.credit}
                  onChange={handleChange}
                />
              </Form.Group>
            )}
            {isDebit && (
              <Form.Group controlId="formAmount">
                <Form.Label>Debit</Form.Label>
                <Form.Control
                  type="number"
                  name="debit"
                  placeholder="Enter Credit Amount"
                  value={budget.debit}
                  onChange={handleChange}
                />
              </Form.Group>
            )}
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn" onClick={handleClose}>
          Close
        </Button>
        <Button className="btn" onClick={handleSubmit}>
          {budget.id ? "Update" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEditBudgetForm;
