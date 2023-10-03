import React,{useState} from "react";
import { Link } from "react-router-dom";

export const Login = ()=>{
        const  [credentials,setCredentials]= useState({
        email: "",
        password: "",
})
 const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log('signed up');
    }

    return(
        <div className="login">
        <div className="fitZing">Fit<span className="zing">Zing</span></div>
        <div className="login-signup-toggle">
            <span className="login-toggle highlight">
                Login
            </span>
            <Link to='/signup' className="signup-toggle">
                Signup
            </Link>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
        <input type='email' value={credentials.email} onChange={onChange} id='email' name='email' placeholder="email" required></input>
        <input type='password' value={credentials.password} onChange={onChange} id='password' name='password' placeholder="password" required></input>
        <button type="submit" className='signup-btn' >Signup</button>

        </form>
        </div>
    )
}