import React from 'react'
import TodoItem from '../todo-item/TodoItem'

const TodoItems = ({todos, onCompleted, onDelete}) => {
  return (
    <div className='todo-items'>
        {todos.map(el => {
            return (
                <TodoItem
                    id={el.id}
                    text={el.text} 
                    key={el.id}
                    completed={el.isCompleted}
                    onCompleted={onCompleted}
                    onDelete={onDelete}
                />
            )
        })}
    </div>
  )
}

export default TodoItems