
import React, {useState} from 'react'
import "../Styles/Todos.css"
import AddTodo from './AddTodo.js'
import TodoItems from './TodoItems.js'

export default function Todos() {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        setTasks([...tasks, task])
    }
     
  return (
    <div id="container">

        <h1 id="listCreate">Create To-Dos List</h1>

        <AddTodo
         addTask={addTask}
        />

        <h2 id="list">My Todos:</h2>

        <TodoItems
         tasks={tasks}
        />

    </div>
  )
}

