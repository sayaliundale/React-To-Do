import React, { useState } from "react";
import "../App.css";
import Task from "./Taskfrom";
import Check from "./Taskcheck";


function Manager() {
  const [addTasks, setTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(0);

  const addTask = () => {
    
    const newTask = {
      id: taskIdCounter,
      component: <Check key={taskIdCounter} />,
    };
    setTasks([...addTasks, newTask]);
    setTaskIdCounter(taskIdCounter + 1);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = addTasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
   
   <div className="cont">
    <div className="App">
      <div className="taskbar">
        <button id="btn" onClick={addTask}>
          +
        </button>
        <Task />
        
      </div>
      {addTasks.map((task) => (
        <div className="delete" key={task.id}>
          {task.component}
          <div onClick={() => deleteTask(task.id)}>
            <svg className="del_icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

export default Manager;
