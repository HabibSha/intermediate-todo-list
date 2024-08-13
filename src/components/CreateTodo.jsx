import { useState } from "react";

const CreateTodo = ({ createNewTodo }) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleClick = () => {
    createNewTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="desc"
        value={todo.desc}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleClick}>Create</button>
    </div>
  );
};

export default CreateTodo;
