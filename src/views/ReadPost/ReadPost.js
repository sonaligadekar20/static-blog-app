import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ReadPost() {
    const {id} = useParams()

    return(
        <div>ReadPost{id}</div>
    )
}

export default ReadPost