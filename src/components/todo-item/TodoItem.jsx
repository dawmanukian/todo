import React from 'react'

const TodoItem = ({text, completed, onCompleted, id, onDelete}) => {
  return (
    <div>
      <div className='todo-item'>
        <label>
          <input 
            type='checkbox' 
            checked={completed}
            onChange={() => onCompleted(id)}
          />
          <span>{text}</span>
        </label>
        <button onClick={() => onDelete(id)}>Remove</button>
      </div>
    </div>
  )
}

export default TodoItem