import React, { useState } from 'react'
import "./TaskForm.css"
import Tag from './Tag'

const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
            task:"",
            status:"todo",
            tags:[]
        })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setTaskData(prev => {
            return {...prev,
                [name]:value
            }
        }) 
    }
    const handleSubmit=(e)=>{
        e.preventDefault() //prevent form default refreshng after submt 
        setTasks(prev => {
            return [...prev,taskData];
        })
        setTaskData({
            task:"",
            status:"todo",
            tags:[]
        })
    }
    const selectTag=(tag)=>{
        if(taskData.tags.some(item=> item==tag)){
            const filterTags = taskData.tags.filter(item=> item!== tag)
            setTaskData((prev) => {
            return {...prev,
                tags:filterTags
            }
        }) 
        }else{
            setTaskData((prev) => {
            return {...prev,
                tags:[...prev.tags,tag]
            }})
        }
    }
    const checkTag=(tag)=>{
        return taskData.tags.some(item => item == tag)
    }
  return (
    <div><header className="app_header">
        <form onSubmit={handleSubmit}>
            <input type='text' name='task' value={taskData.task} onChange={handleChange} className='task_input' placeholder='Enter your task'></input>
            <div className='task_form_bottom_line'>
                <div>
                    <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                    <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                    <Tag tagName="JS" selectTag={selectTag} selected={checkTag("JS")}/>
                    <Tag tagName="REACT" selectTag={selectTag} selected={checkTag("REACT")}/>
                </div>

                <div>
                    <select name='status' value={taskData.status} onChange={handleChange} className='task_status'>
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button type='submit'className='task_submit'>+ Add Task</button>
                </div>
            </div>
        </form>
    </header></div>
  )
}

export default TaskForm