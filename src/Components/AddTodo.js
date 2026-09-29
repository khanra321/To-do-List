import React from 'react'
import "../Styles/AddTodo.css"

const AddTodo = () => {
  return (
    <div id="createDiv">
        <div id="create">
            <input type="text" id="input" placeholder="New Task"/>
            <input type="button" id="add" value="Add"/>
        </div>
    </div>
  )
}

export default AddTodo
