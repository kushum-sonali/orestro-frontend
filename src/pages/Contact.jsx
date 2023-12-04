import React,{useState,useEffect} from "react";
import "./Contact.css";
import { Player } from '@lottiefiles/react-lottie-player';
import ContactCover from "../Animation/Contactcover";
import Footer from "./Footer";
import axios from "axios";
import { toast } from "react-toastify";
function Contact() {
    const [data,setData]=useState({});

    const updateData=(e)=>{
        const {name,value}=e.target;
        setData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    useEffect(()=>{
        console.log(data)
    },[data])
    const sendData=async(e)=>{
        e.preventDefault();
        const {name,email,message}=data;
        if(!name || !email || !message){
            alert("Please fill the data")
        }
        
        const res=await axios.post("http://localhost:5000/message",data);
        if(res.status===200){
           toast.success("Thanks for your feedback :)")
        }
        else{
            alert("Message not sent")
        }

    }

    return(<>
    <div className="contact-main1">
    <div className="contact-heading">Contact us...</div>
    <div className="  col-12 contact-main2">
        <div className="row col-6 animations"><ContactCover/> </div>
        <div className="row col-6 d-flex justify-content-center align-items-center">
         <div className="card demo container">
          <div className="contact-title ">Send me Text :)</div>
            <div className="card-body">
            <div className="mb-2">
                <input type="text" 
                    className="form-control"
                    placeholder="Enter Name"
                    id="name"
                    name="name"
                    required
                    onChange={updateData}
                 />
            </div>
            <div className="mb-2">
                <input type="email" 
                    className="form-control"
                    placeholder="Enter email"
                    id="email"
                    name="email"
                    required
                    onChange={updateData}

                 />
            </div>
            <div className="mb-2">
                <textarea type="text"
                    className="form-control"
                    placeholder="Enter message"
                    id="description"
                    name="message"
                    required
                    onChange={updateData}
                    />
            </div>
            <div className="card-footer">
                <button className="btn btn-primary "
                onClick={sendData}
                >Send</button>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
          
                
                
    </>)
}
export default Contact;