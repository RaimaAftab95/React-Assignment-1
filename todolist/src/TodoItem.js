import React from "react";
import Button from "./Button";

function TodoItem({ item, index, handleDelete, handleEdit, handleMarkDone }) {

  const {markDone } = item;
  const isDone = item.markDone;
  const disableButtons = markDone ? true : false;
  return (
    <div>
    <input
        type="checkbox"
        checked={isDone}
        onChange={() => handleMarkDone(index)}
      />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>{item.name}</span>
      <Button className={`btn btn-danger m-2 ${disableButtons ? 'disabled' : ''}`} disabled={disableButtons} onClick={() => handleDelete(index)}>
         <i className="fa-solid fa-trash-can icon"></i>
      </Button>
      <Button className={`btn btn-primary m-2 ${disableButtons ? 'disabled' : ''}`} disabled={disableButtons} onClick={() => handleEdit(index)}  >
        <i className="fa-solid fa-pen-to-square icon"></i>
      </Button>
      {/* <Button className="btn btn-primary m-3" onClick={() => handleMarkDone(index)}>
        Mark As Done
      </Button> */}
    </div>
  );
}
export default TodoItem;
// disabled={isDone}