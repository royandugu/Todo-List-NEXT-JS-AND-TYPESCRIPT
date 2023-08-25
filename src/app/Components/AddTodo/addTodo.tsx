"use client"

import { FormEvent, useState, useContext } from "react";
import { TodoList } from "../ListType/TodoList";
import { useTodo } from "../Store/todoState";

import todoContext from "../Store/todoContext";
const AddTodo=()=>{

    const [task,setTask]=useState<string>("");
    const [userName,setUserName]=useState<string>("");
    const [completedValue,setCompletedValue]=useState<boolean>(false);

    const todoContext:TodoList[] | undefined=useTodo();
   
    const handleFormSubmit=(e:FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
        const id=Math.random().toString();

        const todoTask: TodoList={
            id:id,
            name:userName,
            task:task,
            completed:completedValue
        }

        todoContext.push(todoTask);
        console.log(todoContext);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" onChange={(e)=>setTask(e.target.value)}/><br/>
            <input type="text" onChange={(e)=>setUserName(e.target.value)}/><br/>
            <select onChange={(e)=>{
                if(e.target.value === "Completed") setCompletedValue(true);
                else setCompletedValue(false);
            }}>
                <option value="Completed"> Completed </option>
                <option value="Not-Completed"> Not completed </option>
            </select>
            <button type="submit" > Add todo </button>
        </form>
    )
}
export default AddTodo;