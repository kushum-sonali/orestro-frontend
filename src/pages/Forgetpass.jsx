import React from "react";
import "./Signup.css";
import axios from "axios";
import "./Forgetpass.css";
import { useState } from "react";
import { toast } from "react-toastify";
function Forgetpass(){
    const[email,setEmail]=useState("");
    const handlChange=(e)=>{
        e.preventDefault();
        const name=e.target.name;
        const value=e.target.value;
        if(name=="email"){
            setEmail(value);
        }
    }
    const collectdata=async()=>{
        try{
            const result=await axios.post("https://orestro-backend.vercel.app/forgetpass",{
                email:email
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            });
            if(result.data){
                toast.success("Email send successfully")
            }
            console.log(result.data);

        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <>
       
        <div className="forget-main">
            <div className="forget-container">
            <div className="forget-head">Forget Password</div>
            <hr></hr>
            <div className="">
                <form>
                    <div className="form-group ">
                        <label for="exampleInputEmail1"
                        
                        >Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"value={email}
                        onChange={handlChange} name="email" placeholder="Enter email"
                        />
                        
                    </div>
                    <div className="d-flex justify-co ntent-center align-items-center pb-2">
                    <button type="submit" className="btn btn-primary forget-btn"
                    onClick={(e)=>{
                        e.preventDefault();
                        collectdata();

                    }}
                    >Send</button>
                    </div>
                </form>
            </div>  
        </div>
        </div>

        </>
    )
}
export default Forgetpass;