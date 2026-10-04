import React from 'react'
import "../Styles/ClrTodos.css"


export default function ClrTodos({TodosClr}) {
  return (
    <div>
      <button onClick = {TodosClr} id="clear">Clear</button>
    </div>
  )
}
