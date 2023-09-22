import React, { useState } from "react";
import './SignIn.css';
import TextField from '@mui/material/TextField';
import BookLogo from '../../images/bookStoreLoginLogo.png';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";





function SignIn() {
    const navigate = useNavigate();
    const [loginDtails,setloginDtails]=useState({
        email:"",
        password:""
    })
    const handleemail=(event)=>{
        setloginDtails({...loginDtails,email:event.target.value})
    }
    const handlepassword=(event)=>{
        setloginDtails({...loginDtails,password:event.target.value})
    }
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const [errorObj, setErrorObj] = useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
    })
    const handleLogin=()=>{
        let emailTest = emailRegex.test(loginDtails.email);
        let passwordTest =passwordRegex.test(loginDtails.password);

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
        if (passwordTest === false) {
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
        console.log(loginDtails)
        if(emailTest === true && passwordTest === true){
         navigate('/dashboard')
        
        }
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
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleemail} error={errorObj.emailError} helperText={errorObj.emailHelper}/>
                    </div>
                    <div className="password">
                        <div><TextField id="outlined-basic" label="Password" type="password" variant="outlined" onChange={handlepassword} error={errorObj.passwordError} helperText={errorObj.passwordHelper}/></div>
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