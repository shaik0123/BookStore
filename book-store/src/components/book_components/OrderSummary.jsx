import React from "react";
import './OrderSummary.css';
import CartFourLogo from '../images/Book.png';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CardsFour() {
    const navigate=useNavigate();
    const checkout=()=>{
        navigate('/cardsfive')
    }
    return (
        <div className="cartfour">
            <div className="cartfourmain">
                <div className="cartfourfirst">
                    <div className="cartfourheading">
                        Order Summary
                    </div>
                </div>
                <div className="cartfoursecond">
                    <div className="imgfour">
                        <img id="cartfourlogo" src={CartFourLogo} alt="logo" />
                    </div>
                    <div className="cardfourcontent">
                        <div className='cardfourheading'>
                            Don't Make Me Think
                        </div>
                        <div className='cardfourscndhd'>
                            by steve kurg
                        </div>
                        <div className='cardfourprice'>
                            <div className='cardfouroffer'>RS.1500</div>
                            <div className='cardfouroriginal'><s>Rs.2000</s></div>
                        </div>
                    </div>
                </div>
                <div className="cartfourthird">
                    <div className="checkout" ><Button  onClick={checkout}className="checkout">Check Out</Button></div>
                </div>

            </div>
        </div>
    )
}
export default CardsFour