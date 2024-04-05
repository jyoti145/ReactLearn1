import React from 'react'
import "./Card.css";

export default function Card(props){
    return(
        <div className="card">
        <img src={props.img} className="card--image" /> 
            <div  className="Cardblock">
                <span>{props.rating}</span>
                <span>{props.reviewCount}</span>
                <span>{props. location}</span>
            </div>
            <h2 className='p1'>{props.  title}</h2>
            <p className='p2'>{props.price}</p>
        </div>
       
    )
}