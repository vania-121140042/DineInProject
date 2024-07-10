import { useState } from "react";

export function ConditionalRendering(){
    const [IsLogin, setIsLogin] = useState(false);

    function toggleLogin(){
        setIsLogin(!IsLogin)
    }
  
    return(
       <>
            <p>{IsLogin ? "Sudah Login" : "Belum Lagin"}</p>
            <button onClick= {(toggleLogin) > (IsLogin ? "Logout" : "Login")}></button>
       </>
    )
  }
  