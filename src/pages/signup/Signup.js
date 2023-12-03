import React from 'react'
import Header from '../../components/Header'
import './signup.css'
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <Header/>
      <div class="content">
        <div class="forms">

            <div class="form-details">
                <h2>Create Account</h2>
                <p>please sign up using your personal information.</p>
            </div>
            <div class="form-content">

                <form method="POST" action="../../backend/user/signupP">
                    <div class="inputs">
                        <input type="text" name="firstName" placeholder="First Name" required/>
                        <label>First Name</label>
                    </div>
                    <div class="inputs">
                        <input type="text" name="lastName" placeholder="Last Name" required/>
                        <label>Last Name</label>
                    </div>
                    <div class="inputs">
                        <input type="email" name="email" placeholder="E-mail" required/>
                        <label>Enter your email</label>
                    </div>
                    <div class="inputs">
                        <input type="password" name="password" placeholder="password" required/>
                        <label>Create password</label>
                    </div>

                    <button type="submit" name="submit">Sign Up</button>
                </form>
                <div class="link">
                    Already have an account?
                    <Link to="/login">Log In</Link>
                </div>
            </div>
        </div>
    </div>
      <Footer/>
    </div>
  )
}
