import React from 'react';
import "./Spotlight.scss";

const Spotlight = ({ props }) => {
    return props.map(({ heading, description, author, image }) => {
        const imgURL = process.env.PUBLIC_URL + "/images/" + image;
        
        return (
            <div className="spotlight">
                <img src={imgURL} alt={heading} />
                <h2>{heading}</h2>
                <p>{description}</p>
                <small>{author}</small>
            </div>
        );
    });
};

export default Spotlight
