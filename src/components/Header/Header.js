import React from 'react';
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";
import AvatarPhoto from "./AvatarPhoto/AvatarPhoto.js";
import AvatarPhotoContainer from "../../Redux/AvatarPhoto";
import {connect} from "react-redux";
import {logOut} from "../../Redux/authReducer";

let Header = (props) => {

    let leavePage = (e) => {
        props.logOut(false)
    };

    return (
        <header className={style.header}>
            <div className={style.logoBlock}>
                <img className={style.logoImg}
                     src="http://truequeandounacosa.files.wordpress.com/2013/10/logo-1.png"
                     alt="Background"/>
                <span className={style.logoText}>MonAmora</span>
            </div>
            <div className={style.exitBlock}>
                <AvatarPhotoContainer />

                <button className={style.buttonExit} onClick={leavePage}>Exit</button>
            </div>
        </header>
)};

    let mapStateToProps = (state) => {
      return {
          isAuth: state.auth.isAuth
      }
    };

    let mapDispatchToProps =(dispatch) => {
        return {
            logOut: (value) => {
                dispatch(logOut(value))
            }
        }
    };


let HeaderContainer = connect (mapStateToProps, mapDispatchToProps) (Header);
    export default HeaderContainer;

