import React from "react";
import s from './postsMaker.module.css'

const PostsMaker = () =>{
    return(
        <div className={s.postMakerContainer}>
            <div><input type="text"/></div>
            <div><button>Send</button></div>
        </div>
    )
}

export default PostsMaker