import {useFormik} from "formik";
import "./login.css"

const Login = () =>{
    const {values, handleChange, handleSubmit} = useFormik({
        initialValues :{
            email : "",
            password : "",
        },
    });

    return(
        <div className="form">
                <div>
                    <form>
                        <div className="inputtag">
                            <label htmlFor="email">Enter your email</label>
                            <input
                                value={values.email}
                                onChange={handleChange}
                                type="email"
                                id="email"
                                placeholder="email"
                            />
                        </div>
                        <div className="inputtag">
                            <label htmlFor="password">Enter your password</label>
                            <input
                                value={values.password}
                                onChange={handleChange}
                                type="password"
                                id="password"
                                placeholder="password"
                            />
                        </div>                  
                        <div className="buttons">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}
export default Login;