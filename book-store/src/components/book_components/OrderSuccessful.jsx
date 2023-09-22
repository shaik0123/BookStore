import React from "react";
import './OrderSuccessful.css';
import OrderLogo from '../images/OrderSuccessLogo.png';
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


function CardsFive() {
    const navigate=useNavigate();
    const handleshopping=()=>{
        navigate('/dashboard')
    }
    return (
        <div className="cartfive">
            <div className="cartfivemain">
                <div>
                    <div><img id="orderimg" src={OrderLogo} alt="Cards" /></div>
                </div>
                <div className="ordercontent">
                    <div>hurry!!!your order is confirmed
                        the order id is #123456 save the order id for
                        further communication..
                    </div>
                </div>
                <div>
                <div className="table" >
                    <div className="tablehead">
                        <div>Email us</div>
                        <div>Contact us</div>
                        <div>Address</div>
                    </div>
                </div>
                <table>
                    <tr>
                        <td>admin@bookstore.com</td>
                        <td>+91 9876543210</td>
                        <td>22-49-G2,1st Main, 3rd Cross near Water Tank, Nandikotkur 508401</td>
                    </tr>
                </table>
                </div>
                <div>
                    <div className="continueshopping"><Button onClick={handleshopping} id="continueshopping">Continue Shopping</Button></div>
                </div>
            </div>
        </div>
    )
}
export default CardsFive