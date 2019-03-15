import React from 'react';
import {connect} from "react-redux";
import Friends from "../components/Friends/Friends.js";
import {setStatusActionCreator, setUsersActionCreator} from "./Friends.reducer.js";

let mapStateToProps = (state) => {
    return {
        users: state.friends.users,
        status: state.friends.status
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setStatus: (status) => {
            dispatch(setStatusActionCreator(status));
        }
    }
};

let FriendsContainer = connect (mapStateToProps, mapDispatchToProps) (Friends);
export default FriendsContainer;