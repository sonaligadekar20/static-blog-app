import React, { useEffect,useState  } from "react";
import { useParams } from "react-router-dom";
import blogData from "./../../configs/blogs-data.json";
import './ReadPost.css'

function ReadPost() {
    const {id} = useParams()

    const [post, setPost] = useState({})

    useEffect(()=> {
        blogData.forEach((postObj)=>{
            if(postObj.id == id){
                setPost(postObj)
            }
    })
}, [id])


    return(
        <> 
        <h1 className="heading-postname">{post.name}</h1>
         <div className="readpost-main-container">
            <div className="readpost-container">
                <img src={post.image} className="image-topspeakers"/>
            <div>
            <h2 className="subheading"> Information</h2>
            <p className="readpost-information"> {post.information} </p> 
            </div> 
            </div>

            <h2 className="subheading-books">Available Books</h2>
            <div className='booksimggroup'>
                            {
                                  post?.books?.map((imgUrl, index) => (
                                    <img key={index} src={imgUrl} alt={`Image ${index}`} className='img-of-books'/>
                                ))
                            }
                            </div>
        </div>
        </>


       
    )
}

export default ReadPost