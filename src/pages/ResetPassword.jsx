import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

function ResetPassword(){
    const [password,setPassword]=useState("");
    const {id,token}=useParams();
    const navigate=useNavigate();
    console.log(id,token);
    // const [cpassword,setCpassword]=useState("");
    const handlChange=(e)=>{
        e.preventDefault();
        const name=e.target.name;
        const value=e.target.value;
        if(name=="password"){
            setPassword(value);
        }
        // else if(name=="cpassword"){
        //     setCpassword(value);
        // }
    }
    const collectdata=async()=>{
        try{
            const result=await axios.post(`https://orestro-backend.vercel.app/reset-password/${id}/${token}`,{
                password:password,
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            });
            if(result.data){
                navigate("/login");
                console.log(result.data);
            }
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <>
        <h1>Reset Password</h1>
        <div>
            
                <div className="">
                    <label >New Password</label>
                    <input type="password" className="form-control"
                    placeholder="Enter New Password"
                    autoComplete="on"
                    name ="password"
                    onChange={handlChange} 
                    value={password}
                    />
                </div>
                {/* <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" 
                    placeholder="Enter Confirm Password"
                    name="password"
                    onChange={handlChange}
                    value={password}
                    />
                </div> */}
                <button type="submit" className="btn btn-primary"
                onClick={collectdata}
                >Update Password</button>
           
        </div>
        </>
    );
}   
export default ResetPassword;