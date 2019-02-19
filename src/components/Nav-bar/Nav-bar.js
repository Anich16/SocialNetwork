import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Nav-bar.module.css";
import FriendsBlock from "./FriendsBlock/FriendsBlock.js"


let NavBar = (props) => {
    return (
        <nav className={style.navBar}>
            <ul className={style.menuList}>
                <li className={style.menuItem}>
                    <NavLink to="/myPage" className={style.menuLink} activeClassName={style.active}>My Page</NavLink>
                </li>
                <li className={style.menuItem}>
                    <NavLink to="/#" className={style.menuLink} activeClassName={style.active}>News</NavLink>
                </li>
                <li className={style.menuItem}>
                    <NavLink to="/messagePage" className={style.menuLink} activeClassName={style.active}>Messages</NavLink>
                </li>
                <li className={style.menuItem}>
                    <NavLink to="/#" className={style.menuLink} activeClassName={style.active}>Friends</NavLink>
                </li>
                <li className={style.menuItem}>
                    <NavLink to="/#" className={style.menuLink} activeClassName={style.active}>Groups</NavLink>
                </li>
                <li className={style.menuItem}>
                    <NavLink to ="/#" className={style.menuLink} activeClassName={style.active}>Photos</NavLink>
                </li>
                <li className={style.menuItem}>
                    <NavLink to="/#" className={style.menuLink} activeClassName={style.active}>Music</NavLink>
                </li>
                <li className={style.menuItem}>
                    <NavLink to="/#" className={style.menuLink} activeClassName={style.active}>Videos</NavLink>
                </li>
                <li className={style.menuItem}>
                    <NavLink to="/#" className={style.menuLink} activeClassName={style.active}>Settings</NavLink>
                </li>
            </ul>
            <FriendsBlock friendsList={props.navBar.friendsList}/>
        </nav>

    )};

export default NavBar;
