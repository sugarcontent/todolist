import * as React from 'react'
import TodoItem from './todo-item'
import { TodoListInterface } from './../interfaces'
import { List } from '@material-ui/core';

const TodoList = (props: TodoListInterface) => {
  
  return (
    <div className="todo-list">
      <List>
        {props.todos.map((todo) => (
          <li key={todo.id}>
              <TodoItem
                todo={todo}
                handleTodoUpdate={props.handleTodoUpdate}
                handleTodoRemove={props.handleTodoRemove}
                handleTodoComplete={props.handleTodoComplete}
                handleTodoBlur={props.handleTodoBlur}
              />
          </li>
        ))}
      </List>
    </div>
  )
}
export default TodoList