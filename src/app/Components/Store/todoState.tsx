"use client"

import { useState,useContext } from "react";
import { TodoList } from "../ListType/TodoList";

import TodoContext from "./todoContext";

export const ToggleState=(props:any)=>{
    
    const [todoList,setTodoList] = useState<TodoList[]>([]);
    
    return(
        <TodoContext.Provider value={todoList}>
            {props.children}
        </TodoContext.Provider>
    )
}

export const useTodo=() : TodoList[]=>{
    const context=useContext(TodoContext);
    if(!context) throw new Error("Context creation error");
    else return context;
}