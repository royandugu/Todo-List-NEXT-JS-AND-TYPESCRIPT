import { Dispatch, SetStateAction, useState } from "react";

import TodoContext from "./todoContext";
const ToggleState=(props:any)=>{
    const [id,setId]=useState<string>("");
    const [name,setName]=useState<string>("");
    const [task,setTask]=useState<string>("");
    const [completed,setCompleted]=useState<boolean>(false);

    type TodoList={
        id:string;
        setId:Dispatch<SetStateAction<string>>;
        name:string;
        setName:Dispatch<SetStateAction<string>>;
        task:string;
        setTask:Dispatch<SetStateAction<string>>;
        completed:boolean;
        setCompleted:Dispatch<SetStateAction<boolean>>;
    }

    //This is one of the most powerful aspect of Typescript
    const collection:TodoList={
        id:id,
        setId:setId,
        name:name,
        setName:setName,
        task:task,
        setTask:setTask,
        completed:completed,
        setCompleted:setCompleted
    }

    return(
        <TodoContext.Provider value={collection}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default ToggleState;