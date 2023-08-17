import React, { useState } from 'react'

const TodoHeader = ({onAdd}) => {
    const [value, setValue] = useState('');
    const [status, setStatus] = useState(false)
    const todoAdd = () => {
      if (value !== '') {        
        onAdd(value)
        setValue('')
        setStatus(false)
      }else {
        setStatus(true)
      }
    }
  return (
    <div className='todo-header'>
        <form onSubmit={(evn) => evn.preventDefault()}>
            <input 
                placeholder='Type here ...'
                value={value}
                onChange={(evn) => setValue(evn.target.value)}
                style={status ? {border: '1px solid red'} : null}
            />
            <button onClick={() => todoAdd()}>Add</button>
        </form>
    </div>
  )
}

export default TodoHeader