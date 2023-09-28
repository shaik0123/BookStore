import React, { useContext, useEffect, useState } from "react";
import './Cart.css'
import { Button, IconButton, TextField } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CartTwoLogo from '../images/Book.png';
import { Link } from "react-router-dom";
import CardsThree from "./CustomerDtails";
import CardsFour from "./OrderSummary";
import BookQuantity from "./BookQuantity";
import { CartContext } from "../context/CartContext";
import { getCartItems } from "../services/BookServices";

function Cart({control}) {
    const [order, setorder] = useState(false);
    const [Continue, setContinue] = useState(false);
    const {toggle}=useContext(CartContext);
    const [getCartItem,setgetCartItems]=useState([]);

    console.log("....",toggle)
    useEffect(()=>{
        if(toggle){
            const GetCartResponse=async()=>{
                let response = await getCartItems();
                let data = response.data.result.map((id)=>id.product_id);
                 console.log("Data from API:", data);
                 setgetCartItems(data);
            }
            GetCartResponse();
        }
    },[toggle])   
    const handleorder = () => {
        setorder(true)
    }
    function getCardsthree(child) {
        setContinue(child);
    }
    return (
        <div className="cardtwomain">
            <div className="homemycart">
                <div><Link onClick={control}>Home</Link></div>/ My Cart
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
                
                {getCartItem.map((item)=>
                <div className="carttwosecond">
              
                
                    <div className="imgtwo">
                        <img id="carttwologo" src={CartTwoLogo} alt="logo" />
                    </div>
                    <div className="cardtwocontent">
                        <div className='cardtwoheading'>
                            {item.bookName}
                        </div>
                        <div className='cardtwoscndhd'>
                            {item.author}
                        </div>
                        <div className='cardtwoprice'>
                            <div className='cardtwooffer'>RS.1500</div>
                            <div className='cardtwooriginal'><s>Rs.2000</s></div>
                        </div>
                        <div className="cartbookquantity">
                            <BookQuantity/>
                            <p>Remove</p>
                        </div> 
                    </div>
                </div>
                )}
                <div className="carttwothird">
                    {!order ?
                        <div className="placeorder" ><Button onClick={handleorder} className="placeorder">place order</Button></div>
                        : ""
                    }
                </div>
            </div>
            {order ? <CardsThree getCardsthree={getCardsthree} /> :
                <div className="carttwoaddress">
                    Address Details
                </div>
            }
            {Continue ? <CardsFour /> :
                <div className="carttwosummary">
                    Order Summary
                </div>
            }
        </div>
    )
}
export default Cart