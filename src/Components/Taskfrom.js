import React, { useState } from "react"

import '../App.css';

const Task = () =>{
    const [taskName, settaskName] = useState("");
   
    return (
        <>
            <form>
                <div >
                    <input className="taskinput"
                    type="text" value={taskName}
                    onChange=
                    {ev=>settaskName(ev.target.value)}
                     placeholder="Enter here ...." />
                     
                </div>
            </form>
        </>
    )

};

export default Task;