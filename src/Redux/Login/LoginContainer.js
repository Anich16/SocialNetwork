import React from "react";
import {connect} from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import {login} from "./LoginReducer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        status: state.login.status,
        message: state.login.message,
        captchaUrl: state.login.captchaUrl
    }
};

let mapDispatchToProps =(dispatch) => {
    return {
        login: (author, password, rememberMe)=> {
            dispatch(login(author, password, rememberMe));
        }
    }
};


let LoginContainer = connect (mapStateToProps, mapDispatchToProps) (LoginForm);

export default LoginContainer;