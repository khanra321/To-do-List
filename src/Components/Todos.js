import { useState } from 'react';
import '../Styles/Todos.css';
import AddTodo from './AddTodo.js';
import TodoItems from './TodoItems.js';
import ClrTodos from './ClrTodos.js';
import SearchTodo from './SearchTodo.js';

export default function Todos({ search }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const TodosClr = () => {
    setTasks([]);
  };

  const filteredTasks = search.trim()
    ? tasks
        .map((task, index) => ({ task, index }))
        .filter(({ task }) => task.toLowerCase().includes(search.toLowerCase()))
    : [];

  return ( 
    <div id="container">
      <SearchTodo
        tasks={tasks}
        search={search}
        removeTask={removeTask}
        searchFilter={filteredTasks}
      />

      <h1 id="listCreate">Create To-Dos List</h1>

      <AddTodo addTask={addTask} />

      <h2 id="list">My Todos:</h2>

      <TodoItems tasks={tasks} removeTask={removeTask} />
      <ClrTodos TodosClr={TodosClr} />
    </div>
  );
}

