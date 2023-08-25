import {createContext} from "react";
import { TodoList } from "../ListType/TodoList";

const todoContext=createContext<TodoList[]>([]);

export default todoContext;