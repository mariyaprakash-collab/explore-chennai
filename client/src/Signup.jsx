import {useFormik} from "formik";
import "./login.css"
import axios from "axios";

const register = () =>{
    const {values, handleChange, handleSubmit, handleReset} = useFormik({
        initialValues :{
            email : "",
            password : "",
            confirmpassword : "",
        },
        onSubmit: async(values,{setSubmitting,resetForm}) => {
            try{
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/admin`,values);
                console.log("response:",response.data);
                resetForm();
            }
            catch{
                console.error("error msg:",error);
            }
        }
    });

    return(
        <div className="form" onSubmit={handleSubmit}>
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
                        <div className="inputtag">
                            <label htmlFor="confirmpassword">Confirm your password</label>
                            <input
                                value={values.confirmpassword}
                                onChange={handleChange}
                                type="password"
                                id="confirmpassword"
                                placeholder="confirm password"
                            />                  
                        </div>
                        <div className="buttons">
                            <button type="submit">Create</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}
export default register;