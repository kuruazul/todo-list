import { createContext, useState } from "react";



const TaskContext = createContext();


const TaskContextProvider = ({ children }) => {
  
const [tasks, setTasks] = useState([]);
const [selectedTask, setSelectedTask] = useState({});

  function deleteTask(key){
      if (tasks.length == 1){
        return setTasks([])
      }

      let preArray = tasks.slice(0,key)
      let postArray = tasks.slice(key+1,tasks.length)
      let newArray = preArray.concat(postArray)
      console.log(preArray, postArray, newArray, key)
      setTasks(newArray)
  }

  function addTask(text){

    if (text.replace(/\s/g, '').length === 0) return  alert("Theres no text on the task")

    text = text.trim()

      let newTask ={
        text,
        check: false
      }
      setTasks([...tasks, newTask])
    }

  function updateTask(updatedTask,id){
    if (tasks.length == 1){
      return setTasks([updatedTask])
    }

    let preArray = tasks.slice(0,id)
    let postArray = tasks.slice(id+1,tasks.length)
    let newArray = preArray.concat([updatedTask],postArray)
    console.log(preArray, postArray, newArray, id)
    setTasks(newArray)
    console.log(updatedTask, tasks, id)
  }
  return (

    <TaskContext.Provider value={{ tasks, selectedTask, updateTask, setTasks, deleteTask, addTask, setSelectedTask }}>

      {children}

    </TaskContext.Provider>

  );

};


export { TaskContext, TaskContextProvider };