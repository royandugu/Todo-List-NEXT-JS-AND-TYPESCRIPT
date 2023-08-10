"use client"

import { FormEvent, useState } from "react";

const AddTodo=()=>{
    const [task,setTask]=useState("");

    const handleFormSubmit=(e:FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/><br/>
            <button type="submit"> Add todo </button>
        </form>
    )
}
export default AddTodo;