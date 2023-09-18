import React from "react";
import "./Signup.css";
import "./Login.css"
import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Authcontext";
import { login } from "../store/UserSlice";
import { themeContext } from "../themeProvider";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {state}=useAuth();
    const { theme, toggleTheme } = useContext(themeContext)
    console.log(theme)
    const handlChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        if (name == "email") {
            setEmail(value);
        }
        else if (name == "password") {
            setPassword(value);
        }
    }
    const collectdata = async () => {
        try {
            const result = await fetch("http://localhost:5000/login", {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            });
            const data = await result.json();
            console.log(data)
            localStorage.setItem("User", JSON.stringify(data.token));
            dispatch(login(data.token));            
            if(result.status==400 || !data){
                toast.error('Invalid Credentials')
            }
            else {
           
                toast.success('lOGIN SUCCESS')
               
                navigate('/homepage')
            }
            
        }
        catch (err) {
            console.log(err);
        }
    }



    return (
        <>
            <div className="text-center center-div main" id="login">
                <div className="container border py-5" id={theme == 'dark'? 'dark ':''}>
                    <div className="title pb-5">
                        <h2 ><strong>Login Here</strong> </h2>
                        <span>Log in for existing users</span>
                    </div>
                    <form >
                        <div className="form-group">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" name="email" id="email" placeholder="Enter Email address" className="form-control p-3" onChange={handlChange} />

                        </div>
                        <div className="form-group">
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" name="password" id="password" placeholder="Enter your Password" className="form-control my-3 p-3" onChange={handlChange} />

                        </div>
                        <div>
                            <button type="submit" value="Login" className="btn btn-block btn-primary btn-lg btn-group p-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    collectdata();
                                }
                                }

                            >Login</button>
                        </div>
                        <div className="footer">
                            <Link to="/" className="linnk">forget password ?</Link>
                            <Link to="/Signup" className="linnk">Register account!</Link>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;
{/* <li className="nav-item">
<Link to={'/signup'}><span className="nav-link active text-white" aria-current="page">Signup</span></Link>
</li>
<li className="nav-item">
<Link to={'/login'}><span className="nav-link active text-white" aria-current="page">Login</span></Link>
</li>  
<li className="nav-item">
  <Link to={'/'}><span className="nav-link active text-white" aria-current="page">Home</span></Link>
</li>
<li className="nav-item">
<Link to={'/about'}><span className="nav-link active text-white" aria-current="page">About</span></Link>
</li>
<li className="nav-item">
<Link to={'/contact'}><span className="nav-link active text-white" aria-current="page">Contact</span></Link>
</li>
<li className="nav-item">
{/* <Link to={'/logout'}><span className="nav-link active text-white" aria-current="page">Logout</span></Link> */}

// </li> <button onClick={logout}>logout</button> */}