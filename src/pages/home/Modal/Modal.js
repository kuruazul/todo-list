import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client';
import { TaskContextProvider, TaskContext } from '../../../contexts/TaksContext';

const Modal = () => {
    let { selectedTask } = useContext(TaskContext)
  return (
    <div  id="modal" class="modal fade" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
              <h1 class="modal-title fs-5 modal-title__status">Status <div title={(selectedTask.check ? "Finished" : "Unfinished")} className={'status__label '.concat(selectedTask.check && "finished")}/></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Description: <br/>
          {selectedTask.text}
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal