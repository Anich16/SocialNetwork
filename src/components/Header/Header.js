import React from 'react';
import style from "./Header.module.css"

let Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logoBlock}>
                <img className={style.logoImg} src="http://truequeandounacosa.files.wordpress.com/2013/10/logo-1.png" />
                <span className={style.logoText}>MonAmora</span>
            </div>
            <button className={style.buttonExit}>Exit</button>
        </header>
)};

    export default Header;

