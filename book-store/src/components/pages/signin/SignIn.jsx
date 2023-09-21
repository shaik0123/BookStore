import React, { useState } from "react";
import './SignIn.css';
import TextField from '@mui/material/TextField';
import BookLogo from '../../images/bookStoreLoginLogo.png';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";





function SignIn() {
    const navigate = useNavigate();
    const [loginDtails,setloginDtails]=useState({
        Email:"",
        Password:""
    })
    const handleemail=(event)=>{
        setloginDtails({...loginDtails,Email:event.target.value})
    }
    const handlepassword=(event)=>{
        setloginDtails({...loginDtails,Password:event.target.value})
    }
    const handleLogin=()=>{
        navigate('/dashboard')
        console.log(loginDtails)
    }
    
    return (
        <div className="firstmain">
            <div className="main">
                <div className="leftpart">
                    <div> <img src={BookLogo} alt="logo"></img></div>
                    <div><h3>ONLINE BOOK SHOPPING</h3></div>
                </div>
                <div className="rightpart">
                    <div className="buttons">
                        <div className="upbtn">LOGIN</div>
                        <div><Link className="upbtn" to="/SignUp">SIGNUP</Link></div>
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleemail}/>
                    </div>
                    <div className="password">
                        <div><TextField id="outlined-basic" label="Password" type="password" variant="outlined" onChange={handlepassword} /></div>
                        <div><Link to="/forgotpassword" >Forgot Password?</Link></div>
                    </div>
                    <div className="divider">
                        ------------    OR     -----------
                    </div>
                    <div className="bottom"><Button id="downbtn" variant="text" onClick={handleLogin}>login</Button></div>
                    <div className="downbtns">
                        <div><Button id="facebookbtn">Facebook</Button></div>
                        <div><Button id="googlebtn">Google</Button></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SignIn