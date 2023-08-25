import { Dispatch, SetStateAction, useState } from "react";
import { TodoList } from "../ListType/TodoList";

import TodoContext from "./todoContext";
const ToggleState=(props:any)=>{
    const [todoList,setTodoList] = useState<TodoList[]>([]);
    
    return(
        <TodoContext.Provider value={todoList}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default ToggleState;