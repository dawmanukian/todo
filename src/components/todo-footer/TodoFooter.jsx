import React from 'react'

const TodoFooter = ({onCompletedDelete, allLength, completedLength}) => {
  return (
    <div className='todo-footer'>
        <span>{completedLength} / {allLength}</span>
        <button onClick={onCompletedDelete}>Delete all completed</button>
    </div>
  )
}

export default TodoFooter