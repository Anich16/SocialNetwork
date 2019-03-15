import React from 'react';
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

let Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logoBlock}>
                <img className={style.logoImg}
                     src="http://truequeandounacosa.files.wordpress.com/2013/10/logo-1.png"
                     alt="Background"/>
                <span className={style.logoText}>MonAmora</span>
            </div>
            <div className={style.exitBlock}>
                <NavLink to="/myPage">
                    <img src="http://frozen-info.ru/img_biografija/Olaf.jpg"
                     width='50' height="50px"
                     alt="Avatar"
                              className={style.photo}/>
                    </NavLink>
                <button className={style.buttonExit}>Exit</button>
            </div>
        </header>
)};

    export default Header;

