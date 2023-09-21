import React from "react";
import './BookOne.css'
import BookOneLogo from '../images/Book.png';
import BookTwoLogo from '../images/Newbook.jpg'
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";

function CardsOne() {
    const navigate=useNavigate();
    const handlecart=()=>{
        navigate('/cardstwo')
    }
    return (
        <div className="cardone">
            <div className="header">
                <div><Link to="/dashboard">Home </Link></div>/Book(01)
            </div>
            <div className="cardonemain">
                <div className="cardonefirst">
                    <div className="bookonelogob"><img className="bookonelogo" src={BookOneLogo} alt="book Logo" /></div>
                    <div className="bookonelogob"><img className="booktwologo" src={BookTwoLogo} alt="book Logo" /></div>
                </div>
                <div className="cardonesecond">
                    <div className="mainbook"><img className="bookonelogo" src={BookOneLogo} alt="book Logo" /></div>
                    <div className="cardonebtn">
                        <div className="divaddbtn"><Button className="addbtn" onClick={handlecart}>ADD TO BAG</Button></div>
                        <div className="divwishlistbtn"><Button className="wishlistbtn"><span>&#9829;</span>WISHLIST</Button></div>
                    </div>
                </div>
                <div className="cardonethird">
                    <div className='cardonecontent'>
                        <div className='cardoneheading'>
                            Don't Make Me Think
                        </div>
                        <div className='cardonescndhd'>
                            by steve kurg
                        </div>
                        <div className='cardoneratingdiv'>
                            <div className='cardonerating'>4.5 &#9733;</div>
                            <div className='cardoneratenum'>(20)</div>
                        </div>

                        <div className='cardoneprice'>
                            <div className='cardoneoffer'>RS.1500</div>
                            <div className='cardoneoriginal'><s>Rs.2000</s></div>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <ul>
                            <li>Book Details</li>
                            <p>Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most recommended books on the subject. Now Steve returns with fresh perspective to reexamine the principles that made Don’t Make Me Think a classic–with updated examples and a new chapter on mobile usability. </p>
                        </ul>
                    </div>
                    <hr></hr>
                    <div className="customer">Customer Feedback</div>
                    <div className="customerfeedback">
                        <div>
                            <Typography component="legend">Overall rating</Typography>
                            <Rating name="no-value" value={null} />
                        </div>
                        <div >
                            <TextField className="reviewfeild" placeholder="Write Your Review" multiline InputLabelProps={{ disableUnderline: true }}></TextField>
                        </div>
                        <div className="cardonesubmit">
                            <div><Button id="cardonesubmit" >Submit</Button></div>
                        </div>
                    </div>
                    <div>
                        <div className="cartoneavatar">
                            <IconButton>
                                <Avatar>sk</Avatar>
                            </IconButton>
                            <p>Shaik Ismail</p>
                        </div>
                        <div>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            <p>A good primer to start understanding usability with actionable guides. It is also packed with further reading recommendations and other relevant resources.</p>
                        </div>
                    </div>
                    <div>
                        <div className="cartoneavatar">
                            <IconButton>
                                <Avatar>pg</Avatar>
                            </IconButton>
                            <p>Pavan Ganesh</p>
                        </div>
                        <div>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            <p>A good primer to start understanding usability with actionable guides. It is also packed with further reading recommendations and other relevant resources.</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardsOne