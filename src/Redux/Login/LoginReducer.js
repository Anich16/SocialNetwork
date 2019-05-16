import * as axios from "axios";
import {setAuth} from "../authReducer";

const LOGIN = "SN/LOGINFORM/LOGIN";
const SET_STATUS = "SN/LOGINFORM/SET_STATUS";
const SET_MESSAGE = "SN/LOGINFORM/SET_MESSAGE";


export const statuses = {
    INIT: "INIT",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
    INPROGRESS: "INPROGRESS",
    CAPTCHAREQUIRED: "CAPTCHAREQUIRED"
};

let initialState = {
    status: statuses.INIT,
    message: ''
};

let loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state};
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_MESSAGE:
            return {...state, message: action.message};
        default:
            return state;
    }
};

export let login = (author, password, rememberMe, captcha)=> (dispatch)=> {
    dispatch(setStatus(statuses.INPROGRESS));
    axios
        .post("https://social-network.samuraijs.com/api/1.0/auth/login",
            {
                email: author,
                password: password,
                rememberMe: rememberMe
            })
        .then(res => {
            if (res.data.resultCode === 0) {
                alert("Мы залогинились");
                dispatch(setStatus(statuses.SUCCESS));
                dispatch(setAuth(true));
            } else {
                alert(res.data.message[0]);
                dispatch(setStatus(statuses.ERROR));
                dispatch(setMessage(res.data.message[0]));

            }
        })

};

export let setStatus =(status) => {
    return {
        type: SET_STATUS,
        status
    }
};

export let setMessage =(message) => {
    return {
        type: SET_STATUS,
        message
    }
};


export default loginReducer;