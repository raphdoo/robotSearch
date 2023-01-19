import React from 'react';
import './card.css';


const Card = ({ id, email, name }) =>{
    
    return (
        <div className='roboCard'>
            <img src={`https://robohash.org/${id}?size=150x150`} alt="Robot" />
            <p> {name} </p>
            <p> {email}</p>
        </div>
    )
}

export default Card;