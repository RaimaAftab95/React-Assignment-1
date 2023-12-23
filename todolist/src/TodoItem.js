import React from "react";
import Button from "./Button";

function TodoItem({ item, index, handleDelete, handleEdit, handleMarkDone }) {

  const {markDone } = item;
  const isDone = item.markDone;
  const disableButtons = markDone ? true : false;
  return (
    <div className="col-12">
    <div className="d-flex align-items-center list-item">

  <input class="form-check-input completed" type="checkbox" id="inlineCheckbox1" value="option1" checked={isDone}
  onChange={() => handleMarkDone(index)}/>
  <span className="p-2" style={{ textDecoration: isDone ? "line-through" : "none" }}>{item.name}</span>
<div className="btn-container">
  <Button className={`btn btn-color ${disableButtons ? 'disabled' : ''}`} disabled={disableButtons} onClick={() => handleDelete(index)}>
    <i className="fa-solid fa-trash-can icon"></i>
  </Button>
  <Button className={`btn btn-color ${disableButtons ? 'disabled' : ''}`} disabled={disableButtons} onClick={() => handleEdit(index)}  >
  <i className="fa-solid fa-pen-to-square icon"></i>
  </Button>
</div>
</div>
</div>
  );
}
export default TodoItem;