import React from 'react'
import "../Styles/AddTodoItem.css"

export default function AddTodoItem() {
    return(
        <form id ="addTask">
            <div id="divForm">
                <label id="labelIn">Task name</label>
                <input id="taskIn" type="text" placeholder="Enter new task name" />
            </div>
            <div id="divForm">
                <label id="labelIn">Description</label>
                <input id="taskIn" type="text" placeholder="Describe your task" />
            </div>
            <div id="divForm">
                <button id="addBtn" type="submit">Add</button>
            </div>
        </form>
    )
}
