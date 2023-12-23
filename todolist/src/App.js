import React, { useState,useEffect  } from "react";
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
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update currentDateTime every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, []);
  const handleClick = (params,x,event) => {
    const temp = [...todos];
      // Check if input is empty
      if (!input.trim()) {
        setShowMessage(true);
        return; // Exit the function early if input is empty
      } else {
        setShowMessage(false);
      }
    if(isEdit){
    console.log("index of editable todo",editIndex);
    temp[editIndex]={name:input, markDone:false};
    setIsEdit(false);
    setEditIndex(-1); 
    }
    else{
      console.log("todos",input);
      temp.push({name:input, markDone:false});
    }
setTodos(temp);
setInput("");
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
    localStorage.removeItem("allTodos"); // Clear local storage
  };

// hook with arrow fun and dependencies to store list
useEffect( ()=> {
  console.log("todos",todos);
  if(todos.length > 0)
  localStorage.setItem("allTodos", JSON.stringify(todos));
}, [todos]);

useEffect( ()=> {
  console.log("useEffect",localStorage.getItem("allTodos"));
  setTodos(JSON.parse(localStorage.getItem("allTodos")) || []);
},[]);

  return (
    <div className="App container d-flex justify-content-center align items-center">
      <div className="center-container">
      <img className="img mt-5" src={require('./images/img2.png')}  alt='todo app logo' />
     <h1 className="mt-5">Todo List App</h1>
    <p>{currentDateTime.toDateString()}</p>
    <p>{currentDateTime.toLocaleTimeString()}</p>
     <hr className="line"/>
      <Input 
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            handleClick();
          }
        }}
        placeholder="✍️Enter Todo"
      />
      <Button className="btn btn-color m-3" onClick={handleClick}>
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
      {showMessage && <p className="emptyMessage">Please enter a todo item.</p>}
    
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleMarkDone={handleMarkDone}
        removeAllTodos={removeAllTodos}
      />
    </div>
    </div>
  );
}

export default App;
