import React from 'react';

export default function SearchTodo({ searchFilter, removeTask, search }) {
  if (!search || !search.trim()) {
    return null;
  }

  return (
    <div id="todoItems">
      {searchFilter.length === 0 ? (
        <p id="p1">No matching task found.</p>
      ) : (
        searchFilter.map(({ task, index }) => (
          <div className="todoItem" key={index}>
            <p id="p1">{task}</p>
            <button id="removeTask" onClick={() => removeTask(index)}>x</button>
          </div>
        ))
      )}
    </div>
  );
}
