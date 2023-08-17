import React, { useState } from 'react'

const TodoHeader = ({onAdd}) => {
    const [value, setValue] = useState('');
    const todoAdd = () => {
      onAdd(value)
      setValue('')
    }
  return (
    <div className='todo-header'>
        <form onSubmit={(evn) => evn.preventDefault()}>
            <input 
                placeholder='Type here ...'
                value={value}
                onChange={(evn) => setValue(evn.target.value)}
            />
            <button onClick={() => todoAdd()}>Add</button>
        </form>
    </div>
  )
}

export default TodoHeader