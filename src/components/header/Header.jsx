import React from "react";
import s from './header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.headerWrapper}>
                        <div className={s.logo}><span>L</span></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header