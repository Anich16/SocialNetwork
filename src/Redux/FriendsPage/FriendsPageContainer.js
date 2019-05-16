import React from "react";
import {connect} from "react-redux";
import FriendsPage from "../../components/Frieds/FriendsPage";
import {
    followAC, getFilteredFriendsReselector, getFilteredFriendsSelector, getFilterSelector, getFriends, getFriendsAC,
    setFilterAC,
    unfollowAC
} from "./FriendsPageReducer";
import {withRouter} from "react-router-dom";

let FriendsPageContainer =(props)=> {
    return  (

        <FriendsPage {...props}/>
    )
};

let mapStateToProps = (state) => {
    return {
        friends: getFilteredFriendsReselector(state),
        filter: getFilterSelector(state),
        totalCount: state.friendsPage.totalCount
    }
};

let mapDispatchToProps =(dispatch) => {
    return {
        follow: (userId)=> {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        getFriends: (friends, pageNumber, defaultPageSize) => {
            dispatch(getFriends(friends, pageNumber, defaultPageSize))
        },
        setFilter: (filter)=> {
            dispatch(setFilterAC(filter))
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsPageContainer));