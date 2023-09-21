import React, { Component } from "react";
import './SignUp.css';
import TextField from '@mui/material/TextField';
import BookLogo from '../../images/bookStoreLoginLogo.png';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";



function SignUp() {
    const navigate = useNavigate();
    const handleSignup=()=>{
        navigate('/')
    }
    return (
        <div className="firstmain">
            <div className="main">
                <div className="leftpart">
                    <div> <img id="imgsignup" src={BookLogo} alt="logo"></img></div>
                    <div><h3>ONLINE BOOK SHOPPING</h3></div>
                </div>
                <div className="rightpart">
                    <div className="buttons">
                        <div><Link className="upbtn" to="/">LOGIN</Link></div>
                        <div className="upbtn">SIGNUP</div>
                    </div>
                    <div>
                        <TextField fullWidth id="outlined-basic" label="Full Name" variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Mobil Number" variant="outlined" />
                    </div>
                    <div className="bottom"><Button id="downbtn" variant="text" onClick={handleSignup}>Signup</Button></div>
                </div>
            </div>
        </div>
    )
}
export default SignUp