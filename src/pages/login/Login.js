import React from 'react'
import Header from '../../components/Header'
import './login.css'
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
        <Header/>
      <div class="content">
        <div class="forms">
            <div class="form-details">
                <h2>Welcome to EAT OUT</h2>
                <p>Please log in using your personal information to stay connected with us.</p>
            </div>
            <div class="form-content">

                <form method="POST" action="../../backend/user/loginP">
                    <div class="inputs">
                        <input type="email" name="email" placeholder="E-mail" required/>
                        <label>Email</label>
                    </div>
                    <div class="inputs">
                        <input type="password" name="password" placeholder="password" required/>
                        <label>Password</label>
                    </div>
                    <Link to="/signup" class="forgot-pass">Forgot password?</Link>
                    <button type="submit">Log In</button>
                </form>
                <div class="link">
                    Don't have an account?
                    <Link to="/signup" >Signup</Link>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
