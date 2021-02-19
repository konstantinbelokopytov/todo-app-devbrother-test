import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import './App.css'
import InputField  from './components/InputField'
import TaskList from './components/TaskList'

function App() {
  
  const [tasks, setTasks] = useState([])
   
  const saveHandler = (taskText) => {
    const trimmedText = taskText.trim()
    if (trimmedText.length > 0) {
      setTasks([...tasks, trimmedText])
  }
}

  const deleteHandler = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex)
    setTasks(newTasks)
  } 

  return (
    <div className="App">
      <Typography 
      component="h1" 
      variant="h2" 
      style={{
        textAlign: 'center'
      }}
      >
        TODO APP
      </Typography>
      <InputField saveTask={saveHandler}  />
      <TaskList 
        tasks={tasks}
        deleteTask={deleteHandler} />
    </div>
  )
}

export default App
