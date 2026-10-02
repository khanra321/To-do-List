import React, {useState} from 'react'
import "../Styles/AddTodo.css"

export default function AddTodo({addTask}){
  const[text,setText] = useState("");
  const handleAdd = () =>{
    if (text.trim() === ""){
      return;
    }
    addTask(text);
    setText("");
  };

  return (
    <div id="createDiv">
        <div id="create">
            <input
             type="text"
             id="input"
             placeholder="New Task"
             value={text}
             onChange={(e) => setText(e.target.value)}
            />
            <input
             type="button" 
             id="add" 
             value="Add"
             onClick={handleAdd}
            />
        </div>
    </div>
  )
}

// export default AddTodo

