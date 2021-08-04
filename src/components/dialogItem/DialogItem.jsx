import React from "react";
import {NavLink} from "react-router-dom";
import s from './dialogItem.module.css'

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}><NavLink to={`/message#${props.name}`}  >{props.name}</NavLink></div>
    )
}

export default DialogItem