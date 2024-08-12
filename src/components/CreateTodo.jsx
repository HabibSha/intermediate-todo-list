import { useState } from "react";

const CreateTodo = ({ createNewTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleClick = () => {
    createNewTodo(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        name="desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Create</button>
    </div>
  );
};

export default CreateTodo;
