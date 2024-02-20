import React from 'react'
import "./context/index.js"
import { TodoProvider, useTodo } from './context/index.js'
function App() {
  const a=useTodo()
  console.log(a)
  return(
    <TodoProvider>
    </TodoProvider>
  )
}

export default App
