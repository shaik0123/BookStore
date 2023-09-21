import React from "react";
import './BookThree.css'
import { Button, Radio, TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';


function CardsThree() {
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
                    <div><TextField label="Full Name" variant="outlined" ></TextField></div>
                    <div><TextField label="Mobile Number" variant="outlined"></TextField></div>
                </div>
                <div className="cartthreethird">
                    <div>
                        <TextField fullWidth className="reviewfeild" label="Address" multiline InputLabelProps={{ disableUnderline: true }}></TextField>
                    </div>
                </div>
                <div className="cartthreescnd">
                    <div><TextField label="city/twon" variant="outlined" ></TextField></div>
                    <div><TextField label="State" variant="outlined"></TextField></div>
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
                    <div className="contineubtn"><Button className="contineubtn">Continue</Button></div>
                </div>
            </div>
        </div>
    )
}
export default CardsThree