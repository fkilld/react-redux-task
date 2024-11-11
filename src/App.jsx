import React from 'react'

import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'


function App() {
  return (
    <div>
      <h1>task Manager</h1>
      <TaskForm></TaskForm>
      <TaskList></TaskList>
    </div>
  )
}

export default App