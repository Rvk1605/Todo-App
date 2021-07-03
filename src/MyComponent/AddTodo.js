import React, { useState } from 'react'; 
export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setdesc] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Title or Description Cannot be Blank");
        }else{
        props.addTodo(title,desc);//This Willl add the Todo to our todoList
        setTitle("");
        setdesc("");
        }
    }
    return (
        <div className="my-5 container">
            <h3>Add a TODO</h3>
            <form onSubmit={submit}>
            <div className="mb-3">
                <label  className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                {/* Onchange is Used to change the Value Asiigned to it in the value */}
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" value={desc} onChange={(e)=>{setdesc(e.target.value)}} id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-sm btn-warning">Add to List</button>
            </form>
        </div>
    )
}
