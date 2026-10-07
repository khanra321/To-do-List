import React, {useState} from 'react'
import "../Styles/AddTodoItem.css"

export default function AddTodoItem() {

    const [taskName, setName] = useState("");
    const [taskDec, setDec] =  useState("");
    const TaskHandle = () => {
        if(taskName || taskDec === ""){
            alart=("Fill the form froperly first")
        }else{
            addTask(taskName, taskDec);
            setName("");
            setDec("")
        }
    };

    return(
        <form id ="addTask">
            <div id="divForm">
                <label id="labelIn">Task name</label>
                <input
                 id="taskIn"
                 type="text"
                 value = {taskName}
                 onChange={(e) => setName(e.target.value)}
                 placeholder="Enter new task name" />
            </div>
            <div id="divForm">
                <label id="labelIn">Description</label>
                <input
                 id="taskIn"
                 type="text"
                 value={taskDec}
                 onChange={(e) => setDec(e.target.value)}
                 placeholder="Describe your task" />
            </div>
            <div id="divForm">
                <button id="addBtn" type="submit" onClick={TaskHandle}>Add</button>
            </div>
        </form>
    )
}
