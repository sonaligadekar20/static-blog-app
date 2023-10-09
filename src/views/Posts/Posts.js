import React from "react";
import blogData from '../../configs/blogs-data.json'
import PreviewPostCard from "../../components/PreviewPostCard/PreviewPostCard";
import './Posts.css'
function Posts() {
    return(
        <div>
            <h1 className="heading">Motivational Speaker</h1>
           <div className="post-container">
           {
                blogData.map((post, index)=>{
                    return <PreviewPostCard key={index} 
                    id={post.id} 
                    name={post.name} 
                    image={post.image} 
                    description={post.description}/>
                }
                    
                )
            }

           </div>
           


            </div>
    )
}

export default Posts