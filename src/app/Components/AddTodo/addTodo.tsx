"use client"

import { useState } from "react";

const AddTodo=()=>{
    const [todo,setTodo]=useState<string>("");

    return(
        <form>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Write your todo" />
            <button type="submit"> Submit </button>
        </form>
    )
}
export default AddTodo;