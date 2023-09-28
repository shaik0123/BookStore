import * as React from 'react';
import './Card.css';
import BookLogo from '../images/Book.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

export default function Cards({ data, SelectedData }) {
    const navigate = useNavigate();
    const handlecard = () => {
        SelectedData(data)
        console.log(data)
    }
    return (
        <div className='cardmain'>
            <Card className="card" onClick={handlecard}>
                <div className='mainbookdiv'>
                    <CardMedia
                        sx={{ height: 30 }}
                    />
                    <div className='bookdiv'>
                        <div><img className="booklogo" src={BookLogo} alt="logo" /></div>
                    </div>
                </div>
                <CardContent>
                    <div className='content'>
                        <div className='heading'>
                            {data.bookName}
                        </div>
                        <div className='scndhd'>
                            {data.author}
                        </div>
                        <div className='ratingdiv'>
                            <div className='rating'>4.5 &#9733;</div>
                            <div className='ratenum'>(20)</div>
                        </div>

                        <div className='price'>
                            <div className='offer'>
                                {data.discountPrice}
                            </div>
                            <div className='original'><s>
                                {data.price}
                            </s></div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
