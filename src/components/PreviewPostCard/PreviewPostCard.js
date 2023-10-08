    import React from "react";
import {Link} from 'react-router-dom';
import "./PreviewPostCard.css"

function PreviewPostCard({ id, name, image, description }) {
    return (
       
        <div className="main-container">
        <div>
            <img src={image} alt="" className='speaker-image'/>
        </div>
        <p className='speaker-name'>{name}</p>
        <p className='about-description'>{(description)}</p>    
    </div>
    )
}
export default PreviewPostCard 