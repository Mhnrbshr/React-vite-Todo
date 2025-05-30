import React, { useState } from "react";
import "./App.css"
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
  const [tasks, setTasks] = useState([])
  const handleDelete=(taskIndex)=>{
    const newTask = tasks.filter((task,index) => index!== taskIndex)
    setTasks(newTask)
  }
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn icon={todoIcon} name="To do" tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn icon={doingIcon} name="Doing" tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn icon={doneIcon} name="Done" tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  );
};

export default App;



