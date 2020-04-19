import * as React from 'react'
import { render } from 'react-dom'
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import { TodoInterface } from './interfaces'
import './styles/styles.css'

const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]) 
  // Creating new todo item
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    setTodos(newTodosState)
  }
  // Update existing todo item
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value
    setTodos(newTodosState)
  }
  // Remove existing todo item
  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
    setTodos(newTodosState)
  }
  // Check existing todo item as completed
  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
    setTodos(newTodosState)
  }
  // Check if todo item has title
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error')
    } else {
      event.target.classList.remove('todo-input-error')
    }
  }
  return (
    <div className="todo-list-app">
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />
      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
      />
    </div>
  )
}
const rootElement = document.getElementById('root')
render(<TodoListApp />, rootElement)