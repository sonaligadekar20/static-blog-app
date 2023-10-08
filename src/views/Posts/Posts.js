import React from "react";
import blogData from '../../configs/blogs-data.json'
import PreviewPostCard from "../../components/PreviewPostCard/PreviewPostCard";

function Posts() {
    return(
        <div>
            <h1>Mtivational Speaker</h1>
            
            {
                blogData.map((post, index)=>{
                    return <PreviewPostCard key={index} 
                    id={post.id} 
                    name={post.name} 
                    image                                       ={post.image} 
                    description={post.description}/>
                }
                    
                )
            }


            </div>
    )
}

export default Posts