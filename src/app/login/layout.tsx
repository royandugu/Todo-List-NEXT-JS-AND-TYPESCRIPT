import type React from "react"

interface LoginLayoutProps{
    children: React.ReactNode
}

const LoginLayout: React.FC<LoginLayoutProps> = (props)=>{
    return(
        <div className="pl-10 pt-10">
        <h5> Login to todo list </h5>
            {props.children}
        </div>
    )
}

export default LoginLayout;