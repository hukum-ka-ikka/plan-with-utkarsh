import { useState } from 'react';
import './Card.css'

function Card(props) {
    const key = props.key;
    const id = props.id;
    const name = props.name;
    const info = props.info;
    const image = props.image;
    const price = props.price;

    const [isExpanded, setIsExpanded] = useState(false);

    const handleTextLength = () => {
        setIsExpanded(!isExpanded);
    }

    const handleInterestClick = () => {
        props.updateDisplay(id);
        console.log("Hello")
        console.log(price);
        console.log(key);
    }

    return (
        <div className="card">
            <img src={image} alt="Image Loading...." className='picture'/>
            <p className="price">{`₹${price}`}</p>
            <p className="name">{name}</p>
            <div className='info'>
                <p>{info.substring(0,125)}
                    <span>{isExpanded && info.substring(150)}</span>
                    <span onClick={handleTextLength} className='read-more'>{isExpanded ? '...Read Less' : '...Read More'}</span>
                </p>
                
            </div>
            <button className='not-interested' onClick={handleInterestClick}>Not Interested</button>
            
        </div>
    );
}

export default Card;