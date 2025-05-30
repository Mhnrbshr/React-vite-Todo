import React from 'react'
import Tag from './Tag'

import "./TaskCard.css"

const TaskCard = ({taskName,tags, taskIndex, handleDelete}) => {
    return (
        <article className='task_card'>
            <p className='task_text'>{taskName}</p>
            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {tags.map((tag,index) => <Tag key={index} tagName={tag} selected/>)}
                </div>
                <div className='task_card_delete'>
                    <button onClick={()=>handleDelete(taskIndex)}>Delete</button>
                </div>
            </div>
        </article>
    )
}

export default TaskCard