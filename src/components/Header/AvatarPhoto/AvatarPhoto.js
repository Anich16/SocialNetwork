import React from "react";
import style from "../Header.module.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


let AvatarPhoto = (props) => {
    return <div>
        { props.isAuth && <NavLink to="/myPage">
            <img src="http://mamamozhetvse.ru/wp-content/uploads/2016/12/Olaf_Frozen-D-59.jpg"
                 width='50' height="50px"
                 alt="Avatar"
                 className={style.photo}/>
        </NavLink>}
        { !props.isAuth && <NavLink to="/login">Sing In</NavLink>}
    </div>
};



export default AvatarPhoto;