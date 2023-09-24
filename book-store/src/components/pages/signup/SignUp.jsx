import React, { Component, useState } from "react";
import './SignUp.css';
import TextField from '@mui/material/TextField';
import BookLogo from '../../images/bookStoreLoginLogo.png';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/UserServices";



function SignUp() {
    const [signup,setsignup]=useState({
        fullname:"",
        email:"",
        passward:"",
        mobileNumber:""
    })
    const handlefullname=(event)=>{
        setsignup({...signup,fullname:event.target.value})
    }
    const handleemail=(event)=>{
        setsignup({...signup,email:event.target.value})
    }
    const handlepassword=(event)=>{
        setsignup({...signup,passward:event.target.value})
    }
    const handlemobilenumber=(event)=>{
        setsignup({...signup,mobileNumber:event.target.value})
    }
    const navigate = useNavigate();

    const nameRegex = /^[A-Z]{1}[a-z]{2,30}( )[A-Z]{1}[a-z]{2,30}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const mobileRegex = /^[6-9]{1}[0-9]{9}$/;
    const [errorObj, setErrorObj] = useState({
        nameError:false,
        nameHelper:"",
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
        mobileError:false,
        mobileHelper:""
    })

    const handleSignup= async()=>{

        let nameTest = nameRegex.test(signup.fullname);
        let emailTest = emailRegex.test(signup.email);
        let passwardTest = passwordRegex.test(signup.passward);
        let mobileTest = mobileRegex.test(signup.mobileNumber);

        if (nameTest === false) {
            setErrorObj((prev) => ({
                ...prev,
                nameError: true,
                nameHelper: "enter correct full name"
            }));
        }
        else {
            setErrorObj((prev) => ({
                ...prev,
                nameError:false,
                nameHelper: ""
            }));

        }
        if (emailTest === false) {
            setErrorObj((prev) => ({
                ...prev,
                emailError: true,
                emailHelper: "enter correct email"
            }));
        }
        else {
            setErrorObj((prev) => ({
                ...prev,
                emailError:false,
                emailHelper: ""
            }));

        }
        if (passwardTest === false) {
            setErrorObj((prev) => ({
                ...prev,
                passwordError: true,
                passwordHelper: "enter correct password"
            }));
        }
        else {
            setErrorObj((prev) => ({
                ...prev,
                passwordError:false,
                passwordHelper: ""
            }));

        }
        if (mobileTest === false) {
            setErrorObj((prev) => ({
                ...prev,
                mobileError: true,
                mobileHelper: "enter correct mobile number"
            }));
        }
        else {
            setErrorObj((prev) => ({
                ...prev,
                mobileError:false,
                mobileHelper: ""
            }));

        }
        console.log(signup)
        if(nameTest === true && emailTest === true && passwardTest === true && mobileTest === true){
            let response = await signUp(signup);
            console.log(response);
            alert("User Registration Successfull")
           // navigate("/")
        } 
        
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
                        <TextField fullWidth id="outlined-basic" label="Full Name" variant="outlined" onChange={handlefullname} error={errorObj.nameError} helperText={errorObj.nameHelper}/>
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleemail} error={errorObj.emailError} helperText={errorObj.emailHelper} />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" onChange={handlepassword} error={errorObj.passwordError} helperText={errorObj.passwordHelper}/>
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Mobil Number" variant="outlined" onChange={handlemobilenumber} error={errorObj.mobileError} helperText={errorObj.mobileHelper}/>
                    </div>
                    <div className="bottom"><Button id="downbtn" variant="text" onClick={handleSignup}>Signup</Button></div>
                </div>
            </div>
        </div>
    )
}
export default SignUp