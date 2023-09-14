import React, { Component } from "react";
import './SignIn.css';
import TextField from '@mui/material/TextField';
import BookLogo from '../../images/bookStoreLoginLogo.png';
import Button from '@mui/material/Button';




class SignIn extends Component {
    render() {
        return (
            <div className="firstmain">
                <div className="main">
                    <div className="leftpart">
                        <div> <img src={BookLogo} alt="logo"></img></div>
                        <div><h3>ONLINE BOOK SHOPPING</h3></div>
                    </div>
                    <div className="rightpart">
                        <div className="buttons">
                            <div><Button className="upbtn" variant="text">LOGIN</Button></div>
                            <div><Button className="upbtn" variant="text">SIGNUP</Button></div>
                        </div>
                        {/* <div>
                            <TextField fullWidth id="outlined-basic" label="Full Name" variant="outlined" />
                        </div> */}
                        <div>
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                        </div>
                        <div className="password">
                            <div><TextField id="outlined-basic" label="Password" type="password" variant="outlined" /></div>
                            <div><a href="" >Forgot Password?</a></div>
                        </div>
                        <div className="divider">
                            ------------    OR     -----------
                        </div>

                        {/* <div>
                            <TextField id="outlined-basic" label="Mobil Number"  variant="outlined" />
                        </div> */}
                        <div className="bottom"><Button id="downbtn" variant="text">login</Button></div>
                        <div className="downbtns">
                            <div><Button id="facebookbtn">Facebook</Button></div>
                            <div><Button id="googlebtn">Google</Button></div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default SignIn