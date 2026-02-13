import React from 'react'
import "./styles/TodoListItem.css"

const TodoListItem = () => {
  return (
    <div className='todolistitem'>
        <input type="checkbox" />
        <div className="detail">
            <h3>name</h3>
            <p>date</p>
        </div>
        <button>삭제</button>
    </div>
  )
}

export default TodoListItem