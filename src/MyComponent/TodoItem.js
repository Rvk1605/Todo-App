import React from 'react'

export const TodoItem = ({todo,onDelete}) => {   //Either accept arguments in props orthe actual variables individully
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button type="button" className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> <hr/>
        </div>
    )//Arrow function in onClick is just passed to prevent onDelete from being auto Called
}
