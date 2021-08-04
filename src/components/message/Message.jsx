import React from "react";
import s from './message.module.css'
import {NavLink} from 'react-router-dom'
import DialogItem from "../dialogItem/DialogItem";

const Message = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                <DialogItem name="Emily" />
                <DialogItem name="Jack" />
                <DialogItem name="Amelia" />
                <DialogItem name="William" />
                <DialogItem name="James" />
                <DialogItem name="Jacob" />
                <DialogItem name="Jessica" />
            </div>
            <div className={s.messages}>messages</div>
        </div>
    )
}

export default Message