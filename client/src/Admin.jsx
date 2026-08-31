import {useState} from "react";
import Login from "./Login";
import Register from "./Signup";
import Category from "./Category";
import "./login.css";


function Admin() {
    const [formname, setFormname] =useState("login")
    const [isadmin, setIsadmin] = useState(false)
    return(
        <div className="page">
            <div  className="view">
                <h2 
                    onClick={()=>{setFormname("login")}}
                    style={{color : formname === "login" ? "orangered" : "#555658"}}
                >
                    Login
                </h2>
                <h2 onClick={()=>{setFormname("signup")}}
                    style={{color : formname === "signup" ? "orangered" : "#555658"}}
                >
                    Signup
                </h2>
            </div>
            {formname === "login" ? <Login /> : <Register/>}
        </div>
    )
}
export default Admin;