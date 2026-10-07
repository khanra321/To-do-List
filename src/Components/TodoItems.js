import React from 'react'
import "../Styles/TodosItems.css"

export default function TodoItems({task,removeTask}) {

  return (
    <div id="todoItems">
                <h1 id ="taskName">{task.taskName}</h1>
                <p id = "taskDec">{task.taskDec}</p>
                <button id="removeTask" onClick = {removeTask}>Delate</button>
    </div>
  )
}
