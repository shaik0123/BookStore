import * as React from 'react';
import './Book.css';
import BookLogo from '../images/Book.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

export default function Cards() {
    const navigate=useNavigate();
    const handlecard=()=>{
       navigate('/cardsone')
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
                            Don't Make Me Think
                        </div>
                        <div className='scndhd'>
                            by steve kurg
                        </div>
                        <div className='ratingdiv'>
                            <div className='rating'>4.5 &#9733;</div>
                            <div className='ratenum'>(20)</div>
                        </div>

                        <div className='price'>
                            <div className='offer'>RS.1500</div>
                            <div className='original'><s>Rs.2000</s></div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
