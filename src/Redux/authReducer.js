const SET_AUTH = "SN/AUTH/SET_AUTH";

let initialState ={
    isAuth: false,
    userInfo: {
        userId: null,
        username: null,
        avatarUrl: ""

    }
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth: action.value};
        default:
            return state;
    }
};

export let setAuth =(value) => {
    return {
        type: SET_AUTH,
        value
    }
};

export default authReducer;