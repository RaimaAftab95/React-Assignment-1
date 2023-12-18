import React, { useState } from "react";
import TodoList from "./TodoList";
import Input from "./Input";
import Button from "./Button";
import "./App.css";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [showMessage, setShowMessage] = useState(false);


  const handleClick = (params,x) => {

    if(isEdit){
    console.log("index of editable todo",editIndex);
    const temp = [...todos];
    temp[editIndex]={name:input, markDone:false};
    setTodos(temp);
    setInput("");
    setIsEdit(false);
    setEditIndex(-1); 
    }
    else{
      console.log("todos",input);
      setTodos([...todos,{name:input, markDone:false}]);
      setInput("");
    }
  };

  const handleMarkDone = (index) => {

  const allTodos = [...todos];
  const todo = allTodos[index];
  todo.markDone= true;
  console.log("allTodos",allTodos);
  setTodos(allTodos);
  console.log('todos',todos);
  };

  const handleDelete = (index) => {
    console.log('index',index);
    const temp = [...todos];
    temp.splice(index,1);
    console.log("temp",temp);
    setTodos(temp);
  };

  const handleEdit = (index) => {
    console.log('index',index);
    const {name} = todos[index];
    setIsEdit(true);
    console.log("edit value", {name});
    setInput(name);
    setEditIndex(index);
  };

  const removeAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <img className="mt-5" src={require('./images/img1.png')}  alt='todo app logo' />
     <h1>Todo List App</h1>
      <Input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
          // if (input === "") {
              // Check if input (not setTodos) is an empty string
    // if (event.target.value === '') {
      if (event.target.value.trim() === '') {
            setShowMessage(true);
          }
          setShowMessage(false);
        }}
        placeholder="✍️Enter Todo"
      />
      <Button className="btn m-3" onClick={handleClick}>
        {isEdit ? (
          <>
          <i className="fa-solid fa-pen-to-square icon"></i>
          </>
        ) : (
          <>
          <i className="fa-solid fa-plus icon"></i>
          </>
        )}
      </Button>
      {showMessage && <p>Please enter a todo item.</p>}
      <hr />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleMarkDone={handleMarkDone}
        removeAllTodos={removeAllTodos}
      />
    </div>
  );
}

export default App;
