import React,{useState } from 'react'
import './login.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Login() {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const navigate =useNavigate()


    

    function sendData(e){
        axios.defaults.withCredentials =true;
        e.preventDefault();
        
        const checkUser ={
            email,
            password
        }
        axios.post("http://localhost:8070/user/checkLogin",checkUser).then(result=>{
            console.log(result)
            if(result.data ==="Success"){
                navigate('/')
                window.location.reload();
            }
        }).catch((err)=>{
            alert("Username or Password incorrect")
        })
    }
  return (
    <div>
        
      <div className="content">
        <div className="forms">
            <div className="form-details">
                <h2>Welcome to EAT OUT</h2>
                <p>Please log in using your personal information to stay connected with us.</p>
            </div>
            <div className="form-content">

            <form onSubmit={sendData}>
                    <div className="inputs">
                        <input type="email" name="email" placeholder="E-mail" required onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label>Email</label>
                    </div>
                    <div className="inputs">
                        <input type="password" name="password" placeholder="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                        <label>password</label>
                    </div>

                    <button type="submit" name="submit">Sign Up</button>
                </form>
                <div className="link">
                    Don't have an account?
                    <Link to="/signup" >Signup</Link>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}
