import React from "react";
import TodoItem from "./TodoItem";
import Button from "./Button";

function TodoList({ todos, handleDelete, handleEdit, handleMarkDone, removeAllTodos }) {
  return (
    <div>
      {todos.map((item, index) => (
      <div>
        <TodoItem
          key={index}
          item={item}
          index={index}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleMarkDone={handleMarkDone}
        />
        </div>
      ))}
      {todos.length > 0 && (
        <Button className="btn btn-color mt-3" onClick={removeAllTodos}>
          Remove all <i className="fa-solid fa-trash icon"></i>
        </Button>
      )}
    </div>
  );
}

export default TodoList;
