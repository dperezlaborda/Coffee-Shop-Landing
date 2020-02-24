import React from 'react';
import './Background.scss';

const Background = (props) =>{
    return (
        <div>
            <div className="container-background">
                <div className="image-background" style={{
                    backgroundImage: `url(${props.img})`
                }}>
                    <div className="text-background">
                        <div className="size-text-background">
                            <h2>{props.title}</h2>
                            <p>{props.text}</p>
                            <h3>{props.link}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Background;