import React from 'react'
import { TodoItem } from './TodoItem'
export const Todo = (props) => {
    return (
        <div className = "container">
            <h3 className=" my-4 ">Todo List</h3>
            {props.todos.length===0? "No TODO to Display ":
            props.todos.map((todo)=>{              //Map Function Requires Sno. which is a unique key for todo item
                return <TodoItem todo={todo} key={todo.sno} onDelete = {props.onDelete}/>
            })}
            
        </div>
    )
}
