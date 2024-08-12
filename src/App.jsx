import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./app.css";
import CreateTodo from "./components/CreateTodo";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  const [todos, setTodos] = useState([]);

  const createNewTodo = (title, desc) => {
    const todo = {
      title,
      desc,
      isCompleted: false,
      createdAt: new Date(),
      id: uuidv4(),
    };

    setTodos([todo, ...todos]);
  };

  return (
    <>
      <div>
        <h1>Create Lists</h1>
        <CreateTodo createNewTodo={createNewTodo} />
        <DisplayTodos todos={todos} />
      </div>
    </>
  );
}

export default App;
