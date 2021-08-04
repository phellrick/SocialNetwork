import React from "react";
import s from './sidebar.module.css'
import {NavLink} from "react-router-dom";




const Sidebar = (props) => {
    return (


        <div className={`${s.menuBody} ${s.active}`} id="menuBody">
            <div className={s.menuBurger} id="menuBurger">
                <div className={`${s.burger} ${s.active}`}  onClick={burgerClick} id="burger"><span></span></div>
            </div>
            <div className={s.menuItems}>
                <div className={s.profile}><NavLink to='/profile'>Profile</NavLink></div>
                <div className={s.message}><NavLink to="/message">Message</NavLink></div>
                <div className={s.news}><NavLink to="/news">News</NavLink></div>
                <div className={s.music}><NavLink to="/music">Music</NavLink></div>
                <div className={s.settings}><NavLink to="/settings">Settings</NavLink></div>
            </div>
        </div>

    )
}

export default Sidebar


const burgerClick = ()=>{
    const burger = document.querySelector('#burger')
    const menuBody = document.querySelector('#menuBody')
    const menuBurger = document.querySelector('#menuBurger')
        if(burger.classList.contains('sidebar_active__2d85p') &&
             menuBody.classList.contains('sidebar_active__2d85p') &&
                menuBurger.classList.contains('sidebar_active__2d85p')

        ){
            burger.classList.remove('sidebar_active__2d85p')
            menuBody.classList.remove('sidebar_active__2d85p')
            menuBurger.classList.remove('sidebar_active__2d85p')
        } else {
            burger.classList.add('sidebar_active__2d85p')
            menuBody.classList.add('sidebar_active__2d85p')
            menuBurger.classList.add('sidebar_active__2d85p')
        }
}




