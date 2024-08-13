const DisplayTodos = ({ todos, toggleCompleted }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleCompleted(todo.id)}
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            <h3>{todo.title}</h3> <p>{todo.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTodos;
