import React from 'react'
import TaskCard from './TaskCard'

import "./TaskColumn.css"

const TaskColumn = ({ name , icon ,tasks , status, handleDelete}) => {
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className="task_column_icon" src={icon}></img>
                {name}</h2>
            {tasks.map((task,index)=> task.status== status && <TaskCard taskName={task.task} tags={task.tags} handleDelete={handleDelete} taskIndex={index}/>)}
        </section >
    )
}

export default TaskColumn