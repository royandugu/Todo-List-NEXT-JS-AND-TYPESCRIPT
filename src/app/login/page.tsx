import type { NextPage } from "next"

import "./CSS/login.css";


const LoginPage:NextPage=()=>{
    return(
        <form className="mt-4 loginForm">
            <input type="text"/> <br/>
            <input type="password"/> <br/>
            <button type="submit"> Login </button>
        </form>
    )
}
export default LoginPage;