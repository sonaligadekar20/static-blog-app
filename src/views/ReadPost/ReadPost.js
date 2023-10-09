import React, { useEffect,useState  } from "react";
import { useParams } from "react-router-dom";
import blogData from "./../../configs/blogs-data.json"

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
        <div>
            <h1>{post.name}</h1>
        </div>

       
    )
}

export default ReadPost