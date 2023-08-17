import React from 'react'

const TodoFooter = (
  {
    onCompletedDelete, 
    allLength, 
    completedLength,
    onSelectAll
  }) => {
  return (
    <div className='todo-footer'>
        <span>{completedLength} / {allLength}</span>
        <button onClick={onSelectAll} className='select-all'>Select all</button>
        <button onClick={onCompletedDelete}>Delete all completed</button>
    </div>
  )
}

export default TodoFooter