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
        axios.post("https://reactproject-6y6b.onrender.com/user/checkLogin", checkUser, { withCredentials: true })
            .then(result => {
                console.log(result);
                if (result.data.message === "Success") {
                    
                    // Assume token is received in result.data.token if back-end is adjusted to send token
                    const token = result.data.token;
                    
                    localStorage.setItem('token', token); 
                    navigate('/'); // Navigate to the home page or dashboard
                    window.location.reload();
                } else {
                    alert(result.data.message || "Authentication failed");
                }
            })
            .catch((err) => {
                console.error("Login error:", err);
                alert(err.response?.data?.message || "Username or Password incorrect");
            });
    }
        
    
  return (
    <div>
        
      <div className="content">
        <div className="forms">
            <div className="form-details">
                <h2>Welcome to EAT OUT</h2>
                
            </div>
            <div className="form-content">
            <p>Please log to stay connected with us.</p>

            <form onSubmit={sendData}>
                    <div className="inputs">
                        <input type="email" name="email" placeholder="E-mail" required onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label>Email</label>
                    </div>
                    <div className="inputs">
                        <input type="password" name="password" placeholder="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                        <label>password</label>
                    </div>

                    <button type="submit" name="submit">Login</button>
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
