import './Signup.css';
import React, { useState } from 'react'

function Signup() {
    const [user, setUser]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    const [emailErr, setEmailErr]=useState(false);
    const [userErr, setUserErr] =useState(false);
    const [passErr, setPassErr] =useState(false);

    function loginHandle(e)
    {
        if(user.length<3 || password.length<3 || email.length<3){
            alert("type correct values")
        }else{
            alert("Wellcome user")
        }
        e.preventDefault()
    }

    function emailHandler(e){
        let item = e.target.value;
        if(item.length<3)
        {
            setEmailErr(true)
        }
        else{
            setEmailErr(false)
        }
        setEmail(item)
       }

   function userHandler(e){
    let item = e.target.value;
    if(item.length<3)
    {
        setUserErr(true)
    }
    else{
        setUserErr(false)
    }
    setUser(item)
   }
   function passwordHandler(e){
    let item = e.target.value;
    if(item.length<3)
    {
        setPassErr(true)
    }
    else{
        setPassErr(false)
    }
    setPassword(item)
   }
    return (
        <div className='BG'>
            <div className="Rectangle">
                <h1>Sign Up</h1>
                <p>No credit card required</p>
                <form onSubmit={loginHandle}>
                    <input className='text' type="email" placeholder='Email address' onChange={emailHandler} />{emailErr? <span>email not valid!</span>:null}
                    <input className='text' type="text" placeholder='Company Name'  onChange={userHandler} />{userErr? <span>Company Name not valid!</span>:null}
                    <input className='text' type="password" placeholder='Password'  onChange={passwordHandler}/>{passErr? <span>Password not valid!</span>:null}
                    <div className='c_div'>
                    <input className='c_box' type="checkbox" /><span class="I-agree-to-the-Terms Text-Style-3">
                        <span class="text-style-1">I agree to the</span>Terms & Conditions
                    </span>
                    </div>
                    <button className='btn' type='submit'>Get Started</button>
                    <div className='s_div'>
                    <span class="Already-have-an-acco">
                        Already have an account?<span class="text-style-1">Sign in</span>
                    </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
