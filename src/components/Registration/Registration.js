import React from "react";
import style from "./Registartion.module.css";

let Registration = (props) => {
    return <div className={style.registration}>
        <form className={style.formBlock}>
            <label className={style.label}>Your Name:
                <input type="text" className={style.field}/>
            </label>
            <label className={style.label}>Your SurName:
                <input type="text"/>
            </label>
            <label className={style.label}>Date of Birth:
                <input type="number"/>
            </label>
            <label className={style.label}>City:
                <input type="text"/>
            </label>
            <label className={style.label}>Email:
                <input type="mail"/>
            </label>
            <label className={style.label}>Password:
                <input type="password"/>
            </label>
            <label className={style.label}>Repeat Password:
                <input type="password"/>
            </label>
            <p className={style.label}>Gender: <label>
                <input type="checkbox"/>
                male
            </label>
            <label>
                <input type="checkbox"/>
                female
            </label></p>
            <button type="submit">Send</button>
        </form>
    </div>
};

export default Registration;