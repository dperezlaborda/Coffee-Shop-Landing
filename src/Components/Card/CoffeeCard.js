import React from 'react';
import './CoffeeCard.scss';

const CoffeeCard = (props) =>{
    return(
        <div className="card-container">
            <div className="card-image" style={{
                backgroundImage : `url(${props.img})`
            }}>
            </div>
            <div className="card-description">
                <h1>{props.title}</h1>
                <h2>{props.text}</h2>
            </div>
        </div>
    );
};

export default CoffeeCard;