import React from 'react';
import style from "./LoginForm.module.css"

let LoginForm = (props) => {
    return (
        <form className={style.formBlock}>
            <div className={style.buttonBlock}>
                <button type="button" className={style.button + " " + style.active}>Login in</button>
                <button type="button" className={style.button}>Registration</button>
            </div>
            <div className={style.fieldsBlock}>
                <label className={style.label}>Your Email:
                    <input type="email" name="Email" placeholder="Email" className={style.field} required/>
                </label>
                <label className={style.label}>Your Password:
                    <input type="password" name="Password" placeholder="Password" className={style.field} required/>
                </label>
            </div>
            <div className={style.checkboxField}>
                <input type="checkbox" name="Checkbox" className={style.checkbox} checked/>
                <label for="Checkbox" className={style.labelCheckbox}>Remember me</label>
            </div>
            <button type="submit" className={style.buttonLogin}>Login</button>
        </form>
    )

};

export default LoginForm;