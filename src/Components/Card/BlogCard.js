import React from 'react';
import './BlogCard.scss';

const BlogCard = (props) =>{
    return(
        <div className="blog-container">
            <div className="blog-image" style={{
                backgroundImage: `url(${props.img})`
            }}>
            </div>
            <div className="text-container">
                <h1 className="margin">{props.title}</h1>
                <h2 className="margin">{props.date}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default BlogCard;