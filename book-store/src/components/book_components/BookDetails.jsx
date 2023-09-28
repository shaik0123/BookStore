import React, { useContext, useState } from "react";
import './BookDetails.css'
import BookOneLogo from '../images/Book.png';
import BookTwoLogo from '../images/Newbook.jpg'
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import BookQuantity from "./BookQuantity";
import { BookContext } from "../context/BookContext";

function BookDetails({ selectedData, Control, CartBookDetails }) {
    const navigate = useNavigate();
    const [addToBag, setaddToBag] = useState(false);
    const { setbookContext } = useContext(BookContext);
    const handlecart = () => {
        setaddToBag(true)
        setbookContext(selectedData)
        CartBookDetails()
    }

    return (
        <div className="cardone">
            <div className="header">
                <div><Link onClick={Control}>Home </Link></div>/Book(01)
            </div>
            <div className="cardonemain">
                <div className="cardonefirst">
                    <div className="bookonelogob"><img className="bookonelogo" src={BookOneLogo} alt="book Logo" /></div>
                    <div className="bookonelogob"><img className="booktwologo" src={BookTwoLogo} alt="book Logo" /></div>
                </div>
                <div className="cardonesecond">
                    <div className="mainbook"><img className="bookonelogo" src={BookOneLogo} alt="book Logo" /></div>
                    <div className="cardonebtn">
                        {addToBag ? <BookQuantity /> :
                            <div className="divaddbtn"><Button className="addbtn" onClick={handlecart}>ADD TO BAG</Button></div>
                        }
                        <div className="divwishlistbtn"><Button className="wishlistbtn"><span>&#9829;</span>WISHLIST</Button></div>
                    </div>
                </div>
                <div className="cardonethird">
                    <div className='cardonecontent'>
                        <div className='cardoneheading'>
                            {selectedData.bookName}
                        </div>
                        <div className='cardonescndhd'>
                            {selectedData.author}
                        </div>
                        <div className='cardoneratingdiv'>
                            <div className='cardonerating'>4.5 &#9733;</div>
                            <div className='cardoneratenum'>(20)</div>
                        </div>

                        <div className='cardoneprice'>
                            <div className='cardoneoffer'>
                                {selectedData.discountPrice}
                            </div>
                            <div className='cardoneoriginal'><s>
                                {selectedData.price}
                            </s></div>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <ul>
                            <li>Book Details</li>
                            <p>
                                {selectedData.description}
                            </p>
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
                            <TextField className="reviewfeild" placeholder="Write Your Review" multiline InputLabelProps={{ disableunderline: true }}></TextField>
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
export default BookDetails