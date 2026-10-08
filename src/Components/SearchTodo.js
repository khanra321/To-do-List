import React from 'react';
import "../Styles/TodosItems.css"

export default function SearchTodo({ searchFilter, removeTask, search }) {
  if (!search || !search.trim()) {
    return null;
  }

  return (
    <div id="todoItem">
      {searchFilter.length === 0 ? (
        <p id="noTodoMsg">No matching task found.</p>
      ) : (
        searchFilter.map(({ task, sno }) => (
          <div id="todoItems" key ={sno}>
              <h1 id ="taskName">{task.taskName}</h1>
              <p id = "taskDec">{task.taskDec}</p>
              <button id="removeTask" onClick = {() => removeTask(task.sno)}>Delate</button>
          </div>  
        ))   
      )}
    </div>
  );
}
