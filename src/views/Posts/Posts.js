import React from "react";
import blogData from '../../configs/blogs-data.json'
import PreviewPostCard from "../../components/PreviewPostCard/PreviewPostCard";
import './Posts.css'
function Posts() {
    return (
        <div>
            <div className="post-main-container" >
                <p className="main-heading">Top Motivational Speakers <br /> In India</p>
            </div>
            <div className="post-container">
                {
                    blogData.map((post, index) => {
                        return <PreviewPostCard key={index}
                            id={post.id}
                            name={post.name}
                            image={post.image}
                            description={post.description} />
                    }

                    )
                }

            </div>



        </div>
    )
}

export default Posts