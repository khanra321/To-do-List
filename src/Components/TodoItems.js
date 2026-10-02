import React from 'react'

export default function TodoItems({tasks}) {

  return (
    <div id="todoItems">
        {tasks.map((task, index) => (
            <div className="todoIem" key={index}>
                <p>{task}</p>
                <button></button>
            </div>
        ))}

        
    </div>
  )
}
