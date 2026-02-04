import { useState } from 'react'
import './App.css'
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo() {
    setTodos([...todos, task])
    setTask("")
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>Todo List</h1>

      <TodoInput
        task={task}
        setTask={setTask}
        addTodo={addTodo}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App