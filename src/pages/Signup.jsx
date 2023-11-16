import React, { useEffect } from "react";
import "./Signup.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

function Signup() {
    
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({
        username: "",
        phone: "",
        email: "",
        password: ""

    });
    const navigate = useNavigate();

    const isValidate = (errors) => {
        let valid = true;
        const error = {};

        if (errors.username.length > 0) {
            newError.username = "Username is required";
            valid = false;
        }
        if (errors.phone.length > 0) {
            newError.phone = "Phone is required";
            valid = false;
        }
        if (errors.email.length > 0) {
            newError.email = "Email is required";
            valid = false;
        }
        if (errors.password.length > 0) {
            newError.password = "Password is required";
            valid = false;
        }
        setFormErrors({ ...errors, ...error });
        return valid;
    }

    useEffect(() => {
        if (localStorage.getItem("User")) {
            navigate('/login')
        }
    }, [])
    const handlChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        if (name == "username") {
            setUsername(value);
        }
        else if (name == "phone") {
            setPhone(value);
        }
        else if (name == "email") {
            setEmail(value);
        }
        else if (name == "password") {
            setPassword(value);
        }
    }


    const collectdata = async () => {
        try {
            console.log(username, phone, email, password);
            const result = await fetch("http://localhost:5000/signup", {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    phone: phone,
                    email: email,
                    password: password
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

            });
            const data = await result.json();
            console.log(data);

            localStorage.setItem("User", JSON.stringify(data));
            if (data) {
                toast.success('Signup Success')
                navigate('/login')
            }

        }
        catch (e) {
            console.log(e); ``
        }
    }
    return (
        <>
            <form method="POST">
                <div className=" main " id="login ">
                    <div className="container ">
                        <div className="title pb-5">
                            <h2 className=""><strong>Signup Here </strong></h2>
                            <span>Sign in for New users</span>
                        </div>

                        <div className="form-group">
                            <i className="fa-solid fa-user icon"></i>
                            <input type="text" name="username" id="username" placeholder="Enter username" value={username} className="form-control my-3 p-1" onChange={handlChange} required
                            />
                            {formErrors.username.length > 0 && (
                                <span className="errorMessage">{formErrors.username}</span>
                            )}
                        </div>
                        <div className="form-group ">
                            <i className="fa-solid icon fa-phone"></i>
                            <input type="number" name="phone" id="phone" placeholder=" Enter phone Number" value={phone} className="form-control my-3 p-1" required onChange={handlChange} />
                            {formErrors.phone > 0 && (
                                <span className="errorMessage">{formErrors.phone}</span>
                            )}
                            {/* <small className="form-text muted-text text-left">register Phone Number</small> */}
                        </div>
                        <div className="form-group ">
                            <i className="fa-solid icon fa-envelope"></i>
                            <input type="email" name="email" id="email" placeholder=" Enter Email address" value={email} required className="form-control my-3 p-1" onChange={handlChange} />
                            {formErrors.email > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                            {/* <small className="form-text muted-text text-left">register email address</small> */}
                        </div>
                        <div className="form-group icons">
                            <i className="fa-solid icon fa-lock"></i>
                            <input type="password" name="password" id="password" placeholder=" Enter Password" value={password} required className="form-control my-3 p-1 " onChange={handlChange} />
                            {formErrors.password > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div>
                            <div>
                                <p>
                                    Do you have an account? <Link to="/login">Login</Link>
                                </p>

                            </div>
                        </div>
                        <div>
                            {/* <input type="submit" value="Login" className="btn btn-block btn-primary p-2"> */}
                            <button type="button" name="signup" className="btn btn-block btn-lg btn-primary btn-group p-2" onClick={(e) => {
                                e.preventDefault();
                                collectdata();
                            }}>Signup</button>
                        </div>


                    </div>
                </div>
            </form>
        </>
    );
}
export default Signup;