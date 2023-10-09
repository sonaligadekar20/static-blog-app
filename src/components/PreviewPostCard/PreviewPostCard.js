import React from "react";
import { Link } from 'react-router-dom';
import "./PreviewPostCard.css"

function PreviewPostCard({ id, name, image, description }) {
    return (
        <div className="main-container">
            <div className="info-container">
                <img src={image} alt="" className='speaker-image' />
                <p className='speaker-name'>{name}</p>
                <p className='about-description'>{(description)}</p>
                <Link to={`/post/read/${id}`}>Read More</Link>        
            </div>
        </div>

    )
}
export default PreviewPostCard 