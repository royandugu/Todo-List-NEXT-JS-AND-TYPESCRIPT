import { useContext } from "react";

import AddTodo from "./Components/AddTodo/addTodo";
import {ToggleState} from "./Components/Store/todoState";

const Page = () => {
  return (

    <main>
      <h2> TODO LIST NEXT JS + TYPESCRIPT </h2>
      <ToggleState>
        <AddTodo />
      </ToggleState>
    </main>
  )
}
export default Page;