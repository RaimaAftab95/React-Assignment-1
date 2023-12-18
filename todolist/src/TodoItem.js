import React from "react";
import Button from "./Button";

function TodoItem({ item, index, handleDelete, handleEdit, handleMarkDone }) {

  const isDone = item.markDone;

  return (
    <div>
         <input
        type="checkbox"
        checked={isDone}
        onChange={() => handleMarkDone(index)}
      />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>{item.name}</span>
      <Button className="btn m-3" onClick={() => handleDelete(index)} disabled={isDone}>
         <i className="fa-solid fa-trash-can icon"></i>
      </Button>
      <Button className="btn m-3" onClick={() => handleEdit(index)}  disabled={isDone}>
        <i className="fa-solid fa-pen-to-square icon"></i>
      </Button>
      {/* <Button className="btn btn-primary m-3" onClick={() => handleMarkDone(index)}>
        Mark As Done
      </Button> */}
    </div>
  );
}

export default TodoItem;
