import React from 'react'
import "../Styles/TodosItems.css"

export default function TodoItems({tasks}) {

  return (
    <div id="todoItems">
        {tasks.map((task, index) => (
            <div className="todoIem" key={index}>
                <p id = "p1">{task}</p>
                <button>x</button>
            </div>
        ))}

        
    </div>
  )
}
