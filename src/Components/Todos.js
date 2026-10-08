import { useState } from 'react';
import '../Styles/Todos.css';
import TodoItems from './TodoItems.js';
import ClrTodos from './ClrTodos.js';
import SearchTodo from './SearchTodo.js';
import AddTodoItem from './AddTodoItem.js';

export default function Todos({ search }) {

  const [tasks, setTasks] = useState([]);
  
  
  const addTasks = (taskName, taskDec) => {
    let sno;
    if(tasks.length===0){
      sno = 0;
      
    }else{
     sno = tasks[tasks.length-1].sno + 1; 
    }

    const myTask ={
      sno: sno, 
      taskName: taskName, 
      taskDec: taskDec,
    }
    setTasks([...tasks, myTask]);
    console.log(myTask);

  };

  const removeTask = (snoz) => {
    setTasks(tasks.filter((tas) => tas.sno !== snoz));
  };

  const TodosClr = () => {
    setTasks([]);
  };

  const filteredTasks = search
    ? tasks
        .map((task, sno) => ({task, sno}))
        .filter(({task}) => task.taskName.toLowerCase().includes(search.toLowerCase()))
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

      <AddTodoItem addTasks={addTasks}/>
      

      <h2 id="list">My Todos:</h2>
      {tasks.length === 0 ? 
      <p id="noTodoMsg">No todo is display</p>:
      tasks.map((task) => {
        return <TodoItems task={task} key={task.sno} removeTask={removeTask} /> 
      })}
      <ClrTodos TodosClr={TodosClr} />
    </div>
  );
}

