import React, { useContext, useState } from 'react'
import { TaskContext } from '../../../contexts/TaksContext'

const ItemList = (props) =>{
    let { task, keyA } = props
    const { deleteTask, setSelectedTask, updateTask } = useContext(TaskContext)
    const checkTask = task.check

    function saveAndChange(){
        updateTask({ text: task.text, check: !checkTask }, keyA)
    }
 
    return(
        <div className={'list-item '.concat(checkTask && 'finished')}>
            <div className={"list-item__description "}>
                {task.text} 
            </div>
            <div className="list-item__status">
                <input type="checkbox" name={'status_'+keyA} id={'status_'+keyA} checked={task.check} onChange={(e)=>saveAndChange()}/>
                <label htmlFor={'status_'+keyA} title={'Task '.concat(checkTask ? "Finished" : "Unfinished")}>
                    <div className='status__check-bg'>
                        <div className='status__check-circle'></div>
                    </div>
                </label>
            </div>
            <div className='list-item__actions'>
                <div onClick={()=> setSelectedTask(task)} className='action__see-more' title='View Details' data-bs-toggle="modal" data-bs-target="#modal" > <i class="bi bi-eye-fill"></i></div>
                {(checkTask)&& (<div onClick={()=> deleteTask(keyA)} className='action__delete' title='Delete Task'> <i class="bi bi-x-circle-fill"></i></div>)}
            </div>
        </div>
    )
}

const List = () => {
    const { tasks } = useContext(TaskContext)
    return (
        <div className='col-md-8'>
            <div className='list-side'>
                <div className='list-side__header'>
                    <div className='list-side__header-description'>Description</div>
                    <div className='list-side__header-status'>Status</div>
                    <div className='list-side__header-actions'>Actions</div>
                </div>
                {(tasks.length > 0) ? tasks.map((task, i) => <ItemList key={'itemlist-'+i} keyA={i} task={task} />) : <h2 className='text-center py-3'>Seems theres no task to do</h2> }
            </div>
        </div>
    )
}

export default List