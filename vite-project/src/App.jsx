import React, { useEffect, useState } from 'react'
import "./context/index.js"
import { TodoProvider, useTodo } from './context/index.js'
function App() {
  const [todos,settodos]=useState([])
  const addTodo=(todos)=>{

  }
  const  DeleteTodo=(id)=>{
  }
  const  EditTodo=(todos,id)=>{
  }
  useEffect(()=>{
    JSON.parse(localStorage.getItem())
  },[])
  return(
    <TodoProvider value={{todos,addTodo,DeleteTodo,EditTodo}}>
      <h1></h1>
      {console.log(todos)}
    </TodoProvider>
  )
}

export default App
