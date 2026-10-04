import React from 'react'
import "../Styles/TodosItems.css"

export default function TodoItems({tasks,removeTask}) {

  return (
    <div id="todoItems">
        {tasks.map((taskItm, index) => (
            <div className="todoItem" key={index}>
                <p id = "p1">{taskItm}</p>
                <button id="removeTask" onClick = {() => removeTask(index)}>x</button>
            </div>
        ))} 
    </div>
  )
}
