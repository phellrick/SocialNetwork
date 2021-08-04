import s from "../sidebar/sidebar.module.css";
import st from "../header/header.module.css";
import Sidebar from '../sidebar/Sidebar'
import sts from './main.module.css'
import React from "react";
import Profile from "../profile/Profile";
import Message from "../message/Message";
import News from '../news/News'
import Music from '../music/Music'
import Settings from '../settings/Settings'
import Test from '../Test/Test'
import {Route, BrowserRouter, Switch} from 'react-router-dom'


const Main = () => {
    return (


                <div className={st.wrapper}>
                    <div className={st.container}>
                        <div className={sts.contentWrapper}>
                            <BrowserRouter>

                            <div className={sts.navMenu}>
                                <Sidebar/>
                            </div>
                            <div className={sts.content}>
                                <Switch>
                                    <Route exact path='/' component={Test}/>
                                    <Route exact path='/profile' component={Profile}/>
                                    <Route exact path='/message' component={Message}/>
                                    <Route exact path='/news' component={News}/>
                                    <Route exact path='/music' component={Music}/>
                                    <Route exact path='/settings' component={Settings}/>
                                </Switch>
                            </div>

                            </BrowserRouter>
                        </div>

                    </div>
                </div>


    )
}

export default Main