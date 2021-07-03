import './App.css';
import Header from "./MyComponent/Header";
import { Todo } from './MyComponent/Todo'; // {} This is because it is not export default
import {Footer} from './MyComponent/Footer';
import { AddTodo } from "./MyComponent/AddTodo";
import { About } from "./MyComponent/About";
import React, { useState, useEffect } from 'react'; //Use state Hook
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo; 
  if(window.localStorage.getItem("todos")===null){
    initTodo =[];
  }else{
    initTodo = JSON.parse(window.localStorage.getItem("todos"));
  }


  const onDelete  = (todo)=>{   
  //   console.log("I'll Delete of todo",todo); 
    setTodo (todos.filter((e)=>{
    return e!==todo;
    }))
    window.localStorage.setItem("todos",JSON.stringify(todos));

  }
  //Now if we will write our manual function to delete a todo than our DOM will not be updated with the deleted item.
  // So we will use Use State Hook in React
 //Settodos is a function that will update the DOM 
  // Now We will Store our todo List in Local Storage


const addTodo = (title,desc)=>{
  let sno;
  if(todos.length>0){
   sno = todos[todos.length-1].sno+1;
  }else if(todos.length===0){
    sno=1;
  }
  const myTodo ={
    sno:sno,
    title:title,
    desc:desc
  }
  setTodo([...todos,myTodo]);
  console.log(myTodo); 
}

const [todos, setTodo] = useState(initTodo) ;

useEffect(() => {
  window.localStorage.setItem("todos",JSON.stringify(todos));
}, [todos])
 
  return (
    <>
    <Router>
    <Header title="Todo App" button = {false}/>
    
    {/* /* This should render at some endpoint like /,/about */ } 
    <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo}/>
              <Todo todos ={todos} onDelete ={onDelete}/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">  
          {/* Exact is used to match the exact end point or path */}
            <About />
          </Route>
    </Switch>

    <Footer/>
    </Router>
    </>
  );
}

export default App;

