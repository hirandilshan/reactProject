import React from 'react'
import './login.css'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
        
      <div className="content">
        <div className="forms">
            <div className="form-details">
                <h2>Welcome to EAT OUT</h2>
                <p>Please log in using your personal information to stay connected with us.</p>
            </div>
            <div className="form-content">

                <form method="POST" action="../../backend/user/loginP">
                    <div className="inputs">
                        <input type="email" name="email" placeholder="E-mail" required/>
                        <label>Email</label>
                    </div>
                    <div className="inputs">
                        <input type="password" name="password" placeholder="password" required/>
                        <label>Password</label>
                    </div>
                    <Link to="/signup" className="forgot-pass">Forgot password?</Link>
                    <button type="submit">Log In</button>
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
