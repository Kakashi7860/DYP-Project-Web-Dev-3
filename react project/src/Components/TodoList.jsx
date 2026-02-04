function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList