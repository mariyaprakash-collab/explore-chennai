import { useState } from "react";
import "./login.css"

function Login(){
    const [name,setName]=useState("");
    const [password,setPass]=useState("");
    
    return(
        
            <div className="loginpage">
                <div className="loginform">
                    <div className="loginhead">
                        <h2>Login as admin</h2>
                    </div>
                    
                    <form> 
                            <input 
                                type="text"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                placeholder="Enter name"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e)=>setPass(e.target.value)}
                                placeholder="Enter password"
                            />
                            <input
                                className="submit"
                                type="submit"
                            />
                    </form>
                </div>
            </div>
        
    )
};
export default Login;