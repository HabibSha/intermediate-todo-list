import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./app.css";
import CreateTodo from "./components/CreateTodo";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  const [todos, setTodos] = useState([]);
  const [visibility, setVisibility] = useState("all");

  const createNewTodo = (todoList) => {
    const { title, desc } = todoList;

    const todo = {
      title,
      desc,
      isCompleted: false,
      createdAt: new Date(),
      id: uuidv4(),
    };

    setTodos([todo, ...todos]);
  };

  const toggleCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted; // todo.isCompleted = true;
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(todos);
  };

  const handleVisibility = (text) => {
    setVisibility(text);
  };

  const filterTodo = () => {
    if (visibility === "incomplete")
      return todos.filter((item) => !item.isCompleted);
    if (visibility === "completed")
      return todos.filter((item) => item.isCompleted);
    return todos;
  };

  return (
    <>
      <div>
        <h1>Create Lists</h1>
        <CreateTodo createNewTodo={createNewTodo} />
        <div>
          <button onClick={() => handleVisibility("all")}>All</button>
          <button onClick={() => handleVisibility("completed")}>
            Completed
          </button>
          <button onClick={() => handleVisibility("incomplete")}>
            Incomplete
          </button>
        </div>
        <div>Select Visibility: {visibility}</div>
        <DisplayTodos todos={filterTodo()} toggleCompleted={toggleCompleted} />
      </div>
    </>
  );
}

export default App;
