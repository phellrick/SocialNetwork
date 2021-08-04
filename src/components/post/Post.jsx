import React from "react";
import s from './post.module.css'

const Post = (props) =>{
    return(
        <div className={s.postContainer}>
                <p>{props.text}</p>
        </div>
    )
}

export default Post