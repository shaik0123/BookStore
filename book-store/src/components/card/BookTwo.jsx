import React, { useState } from "react";
import './BookTwo.css'
import { Button, IconButton, TextField } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CartTwoLogo from '../images/Book.png';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

function CardsTwo() {
    return (
        <div className="cardtwomain">
            <div className="homemycart">
                <div><Link to="/dashboard">Home</Link></div>/ My Cart
            </div>
            <div className="cardtwo">
                <div className="carttwofirst">
                    <div>
                        My Cart(1)
                    </div>
                    <div className="location">
                        <IconButton>
                            <LocationOnOutlinedIcon style={{ color: "brown" }} />
                        </IconButton>
                        Use Current Location
                    </div>
                </div>
                <div className="carttwosecond">
                    <div className="imgtwo">
                        <img id="carttwologo" src={CartTwoLogo} alt="logo" />
                    </div>
                    <div className="cardtwocontent">
                        <div className='cardtwoheading'>
                            Don't Make Me Think
                        </div>
                        <div className='cardtwoscndhd'>
                            by steve kurg
                        </div>
                        <div className='cardtwoprice'>
                            <div className='cardtwooffer'>RS.1500</div>
                            <div className='cardtwooriginal'><s>Rs.2000</s></div>
                        </div>
                        
                    </div>
                </div>
                <div className="carttwothird">
                    <div className="placeorder" ><Button className="placeorder">place order</Button></div>
                </div>
            </div>
            <div className="carttwoaddress">
                Address Details
            </div>
            <div className="carttwosummary">
                Order Summary
            </div>
        </div>
    )
}
export default CardsTwo