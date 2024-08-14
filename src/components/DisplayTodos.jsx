const DisplayTodos = ({ todos, toggleCompleted, removeTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li
              onClick={() => toggleCompleted(todo.id)}
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              <h3>{todo.title}</h3> <p>{todo.desc}</p>
            </li>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTodos;
