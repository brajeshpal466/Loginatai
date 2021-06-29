import React from 'react'
import './login.css';
import atai  from './logo/atai_logo_new.png'
function Login() {
    return (
        <div className="login-conatainer">
            <div className="login-body">
            <div className="login-form">
                <img id="logo-img" src={atai} alt="logo"></img>
                <span className="login" >Login</span>
                <span className="lorem-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <input type="text" placeholder="Email Address  |" className="form-control"></input>
                <input type="text" placeholder="Password  |" className="form-control"></input>
                <select type="text" placeholder="Section ID |" className="form-control" >
                    <option defaultValue="none" > Section ID</option>
                    <option>ID1</option>
                    <option>ID1</option>
                </select>
               <div className="remind-forgot"> <span className="lorem-text1"><input type="checkbox"></input>&nbsp;Remember me</span><span className="lorem-text2">Forgot Password </span></div>
             <button className="btn btn-primary">Login</button>
             <span className="terms-text">By logging in you agree to our <a href="#"> Terms & Conditions </a></span>
            </div>
            </div>

            
        </div>
    )
}

export default Login
