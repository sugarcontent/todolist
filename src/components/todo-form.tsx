import * as React from 'react'
import shortid from 'shortid'
import {TodoInterface, TodoFormInterface} from './../interfaces'
import Snackbar from '@material-ui/core/Snackbar';

const TodoForm = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [formState, setFormState] = React.useState('')
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value)
  }
  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false
      }
      props.handleTodoCreate(newTodo)
      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
      }
      handleOpen()
    }
  }
  return (
    <div className="todo-form">
      <h1>Todo</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder='What needs to be done?'
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message="Todo Added"/>
    </div>
  )
}
export default TodoForm