import React from "react";
import './BookFour.css';
import CartFourLogo from '../images/Book.png';
import { Button } from "@mui/material";

function CardsFour() {
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
                    <div className="checkout" ><Button className="checkout">Check Out</Button></div>
                </div>

            </div>
        </div>
    )
}
export default CardsFour