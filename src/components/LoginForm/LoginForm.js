import React from 'react';
import style from "./LoginForm.module.css"
import {statuses} from "../../Redux/LoginReducer";
import {Redirect} from "react-router-dom";

let LoginForm = (props) => {

    if (props.isAuth){
        return <Redirect to="/"/>
    }

    let author = React.createRef();
    let password = React.createRef();
    let rememberMe = React.createRef();

    let onLoginClick = (e) => {
        e.preventDefault();
        props.login && props.login(author.current.value, password.current.value, rememberMe.current.checked);
    };

    let messageErrorBlock = props.status === statuses.ERROR &&
        <div className={style.error}>{props.message}</div>;


    return (
        <form className={style.formBlock}>
            <div className={style.buttonBlock}>
                <button type="button" className={style.button + " " + style.active}>Login in</button>
                <button type="button" className={style.button}>Registration</button>
            </div>
            <div className={style.fieldsBlock}>
                <label className={style.label}>Your Email:
                    <input type="email" name="Email"
                           placeholder="Email" className={style.field}
                           defaultValue="anya.zubik.1997@mail.ru"
                           ref={author}
                           required/>
                </label>
                <label className={style.label}>Your Password:
                    <input type="password" name="Password"
                           placeholder="Password" className={style.field}
                           defaultValue="14586541" ref={password}
                           required/>
                </label>
            </div>
            <div className={style.checkboxField}>
                <input type="checkbox" name="Checkbox"
                       className={style.checkbox}
                       ref={rememberMe}
                       checked/>
                <label for="Checkbox" className={style.labelCheckbox}>Remember me</label>
            </div>
            <button type="submit" className={style.buttonLogin}
                    onClick={onLoginClick}
                    disabled={props.status === statuses.INPROGRESS}>Login</button>
            {messageErrorBlock}
        </form>

    )

};

export default LoginForm;