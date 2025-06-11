import React, { act, useEffect, useState } from "react";
import "./App.css"
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])
  const [activeCard,  setActiveCard] = useState(null)

  const handleDelete=(taskIndex)=>{
    const newTask = tasks.filter((task,index) => index!== taskIndex)
    setTasks(newTask)
  }

  const onDrop =( status, index)=>{
    console.log(`${activeCard} is going to place at ${index}`)
    if(activeCard==null || activeCard==undefined) return;

    const taskToMove = tasks[activeCard]//removing item

    const updatedTask = tasks.filter((task,index)=> index!= activeCard)//dragedOne removed from tasks array=> got new array
    
    updatedTask.slice(index, 0, {
      ...taskToMove,
      status:status //moving item status changed
    })//where to place,how many elemnts removed,item to be stored

    setTasks(updatedTask)
  }

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn icon={todoIcon} name="To do" tasks={tasks} status="todo" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
        <TaskColumn icon={doingIcon} name="Doing" tasks={tasks} status="doing" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
        <TaskColumn icon={doneIcon} name="Done" tasks={tasks} status="done" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
      </main>
    </div>
  );
};

export default App;



