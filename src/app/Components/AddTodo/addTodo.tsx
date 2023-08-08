"use client"

import { useState } from "react";

const AddTodo=()=>{
    const [task,setTask]=useState("");

    const handleFormSubmit=(e:any):void=>{
        e.preventDefault();
        console.log(task);
    }

    return(
        <form onSubmit={(e)=>handleFormSubmit(e)}>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/><br/>
            <button type="submit"> Add todo </button>
        </form>
    )
}
export default AddTodo;