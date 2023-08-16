import React, { useState } from 'react'

const TodoHeader = ({onAdd}) => {
    const [value, setValue] = useState('');
  return (
    <div className='todo-header'>
        <form onSubmit={(evn) => evn.preventDefault()}>
            <input 
                placeholder='Type here ...'
                value={value}
                onChange={(evn) => setValue(evn.target.value)}
            />
            <button onClick={() => onAdd(value)}>Add</button>
        </form>
    </div>
  )
}

export default TodoHeader