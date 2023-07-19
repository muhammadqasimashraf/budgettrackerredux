import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddEditBudgetForm = ({
  budget,
  handleClose,
  handleSubmit,
  handleChange,
}) => {
  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{budget.id ? "Edit Budget" : "Add Budget"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <Form.Group controlId="formAmount">
            <Form.Label>Budget Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              placeholder="Enter Budget Amount"
              value={budget.amount}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formAmount">
            <Form.Label>Credit</Form.Label>
            <Form.Control
              type="number"
              name="credit"
              placeholder="Enter Credit Amount Amount"
              value={budget.credit}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
        <Button variant="dark" onClick={handleSubmit}>
          {budget.id ? "Update" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEditBudgetForm;
