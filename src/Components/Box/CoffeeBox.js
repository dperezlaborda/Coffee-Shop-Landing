import React from 'react';
import './CoffeeBox.scss';

const CoffeeBox = (props) =>{
    return(
        <div className="box-container">
            <div className="box-text">
                <div className="text-size">
                    <h2>{props.tit}</h2>
                    <p>{props.description}</p>
                    <h3>{props.link}</h3>
                </div>
            </div>
            <div className="box-image" style={{
                backgroundImage : `url(${props.img})`
            }}>
            </div>
        </div>
    );
}

export default CoffeeBox;