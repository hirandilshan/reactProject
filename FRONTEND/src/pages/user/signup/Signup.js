import React,{useState} from 'react'
import './signup.css'
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    function sendData(e){
        e.preventDefault();
        
        const newUser ={
            firstName,
            lastName,
            email,
            password
        }
        axios.post("http://localhost:8070/user/add",newUser).then(()=>{
            alert("signup successful");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("")
        }).catch((err)=>{
            alert(err)
        })
    }

  return (
    <div>
      
      <div className="content">
        <div className="forms">

            <div className="form-details">
                <h2>Create Account</h2>
                <p>please sign up using your personal information.</p>
            </div>
            <div className="form-content">

                <form onSubmit={sendData}>
                    <div className="inputs">
                        <input type="text" name="firstName" placeholder="First Name" required onChange={(e)=>{setFirstName(e.target.value)}}/>
                        <label>First Name</label>
                    </div>
                    <div className="inputs">
                        <input type="text" name="lastName" placeholder="Last Name" required onChange={(e)=>{setLastName(e.target.value)}}/>
                        <label>Last Name</label>
                    </div>
                    <div className="inputs">
                        <input type="email" name="email" placeholder="E-mail" required onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label>Enter your email</label>
                    </div>
                    <div className="inputs">
                        <input type="password" name="password" placeholder="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                        <label>Create password</label>
                    </div>

                    <button type="submit" name="submit">Sign Up</button>
                </form>
                <div className="link">
                    Already have an account?
                    <Link to="/login">Log In</Link>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}
