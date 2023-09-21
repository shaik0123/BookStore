import React from "react";
import './Forgotpassword.css'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {
    const navigate=useNavigate();
    const handlecreataccount=()=>{
        navigate('/')
    }
    return (
        <div className="Passmain">
            <div className="passnext">
                <div><h1>Forgot Your Password</h1></div>
                <div className="emailcontent">
                    <div className="textcontent box">
                        <div className="data">
                            Enter your email address and we'll send you a link to reset your password.
                        </div>
                    </div>
                    <div className="email-box box">
                        <TextField className="email" label="Email" variant="outlined" />
                    </div>
                    <div className="resetbtn box">
                        <Button id="resetbtn" >Reset Password</Button>
                    </div>
                </div>
                <div className="creatcontent">
                    <div className="creatbtn"><Button onClick={handlecreataccount} id="creatbtn">Create Account</Button></div>
                </div>
            </div>
        </div>
    )
}
export default ForgotPassword