import { useState } from "react";

import TodoContext from "./todoContext";
const ToggleState=(props:any)=>{
    
    const collection:Object={
        name:"Royan"   
    }

    return(
        <TodoContext.Provider value={collection}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default ToggleState;