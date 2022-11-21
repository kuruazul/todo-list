import React, { useContext, useState } from 'react'
import { TaskContext } from '../../../contexts/TaksContext'

const Form = (props) => {
  let { addTask } = useContext(TaskContext)
  const [ text, setText ] = useState('')
  const [ mobileDisplay, setMobiledisplay] = useState(false)

  function addTaskBykeydown(e){
    console.log(e.target)
    if ( !e.target.classList.contains("form-side__content") && e.key !== "Enter") return
    addTask(text)
  }


  return (
    <div onKeyDown={(e)=> e.key==="Escape" && setMobiledisplay(false)} className={'form-container '.concat(mobileDisplay && "displayed")}>
      <div className='btn-open-form' title={!mobileDisplay ? "Show form" : "Hide form"} onClick={()=> setMobiledisplay(!mobileDisplay)}>{!mobileDisplay ? <i class="bi bi-plus-circle-fill"></i> : <i class="bi bi-dash-circle-fill"></i>}</div>
      <div className='form-side'>
          <h2 className='text-center'>Form</h2>
          <div className='form-side__content' onKeyDown={addTaskBykeydown}>
              <input type={'text'} placeholder='Type a todo task' className='form-side__input' onChange={(e)=> setText(e.target.value)}/>
              <input type={'button'} className='form-side__submit' value={'Add'} onClick={()=>addTask(text)}/>
          </div>
      </div>
    </div>
  )
}

export default Form