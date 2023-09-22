import React, { useState } from "react";
import './CustomerDtails.css'
import { Button, Radio, TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';


function CardsThree({getCardsthree}) {
    const [Continue,setContinue]=useState(false);
    const [customerDetails,setcustomerDtails]=useState({
        fullname:"",
        mobileNumber:"",
        address:"",
        cityOrState:"",
        state:""
    })
    const handlefullname=(event)=>{
        setcustomerDtails({...customerDetails,fullname:event.target.value})
    }
    const handlemobilenmber=(event)=>{
        setcustomerDtails({...customerDetails,mobileNumber:event.target.value})
    }
    const handleaddress=(event)=>{
        setcustomerDtails({...customerDetails,address:event.target.value})
    }
    const handlecityorstate=(event)=>{
        setcustomerDtails({...customerDetails,cityOrState:event.target.value})
    }
    const handlestate=(event)=>{
        setcustomerDtails({...customerDetails,state:event.target.value})
    }
    const handlecontinue=()=>{
        setContinue(!Continue);
        getCardsthree(Continue)
        console.log(customerDetails)
    }
    return (
        <div className="cartthreemain">
            <div className="cartthree">
                <div className="cartthreefirst">
                    <div className="customerdetails">
                        <p>Customer Details</p>
                    </div>
                    <div>
                        <Button id="addnewaddress">Add New Address</Button>
                    </div>
                </div>
                <div className="cartthreescnd">
                    <div><TextField label="Full Name" variant="outlined" onChange={handlefullname}></TextField></div>
                    <div><TextField label="Mobile Number" variant="outlined" onChange={handlemobilenmber}></TextField></div>
                </div>
                <div className="cartthreethird">
                    <div>
                        <TextField fullWidth className="reviewfeild" label="Address" onChange={handleaddress} multiline InputLabelProps={{ disableUnderline: true }}></TextField>
                    </div>
                </div>
                <div className="cartthreescnd">
                    <div><TextField label="city/twon" variant="outlined" onChange={handlecityorstate}></TextField></div>
                    <div><TextField label="State" variant="outlined" onChange={handlestate}></TextField></div>
                </div>
                <div className="cartthreefourth">
                    Type
                    <div>
                        <FormControlLabel value="Home" control={<Radio />} label="Home" />
                        <FormControlLabel value="Work" control={<Radio />} label="Work" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </div>
                </div>
                <div className="cartthreefifth">
                    <div className="contineubtn"><Button onClick={handlecontinue} className="contineubtn">Continue</Button></div>
                </div>
            </div>
        </div>
    )
}
export default CardsThree