import React from 'react';
import Card from './card';
import './cardList.css';


const CardList = ({ robots }) =>{
    const cardList = robots.map((robot, index)=>{
        return (
            <Card key= {robots[index].id} id = {robots[index].id} name={robots[index].name} email={robots[index].email}/>
        )
    })


    return (
        <div className="cardList">
            {cardList}
        </div>
    )
}

export default CardList;