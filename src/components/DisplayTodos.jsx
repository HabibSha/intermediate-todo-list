const DisplayTodos = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3> <p>{todo.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTodos;
