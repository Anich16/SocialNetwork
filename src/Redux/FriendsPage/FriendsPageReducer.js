import * as axios from "axios";
import {createSelector} from "reselect";


const FOLLOW = "SN/FRIENDS_PAGE/FOLLOW";
const UNFOLLOW = "SN/FRIENDS_PAGE/UNFOLLOW";
const GET_FRIENDS = "SN/FRIENDS_PAGE/GET_FRIENDS";
const SET_FILTER = "SN/FRIENDS_PAGE/SET_FILTER";
const SET_TOTAL_COUNT = "SN/FRIENDS_PAGE/SET_TOTAL_COUNT";

export const statuses = {
    INIT: "INIT",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
    INPROGRESS: "INPROGRESS",
    CAPTCHAREQUIRED: "CAPTCHAREQUIRED"
};

let initialState = {
    filter: "",
    status: statuses.INIT,
    totalCount: 0,
    friends: [

    ]
};

let FriendsPageReducer = (state = initialState, action)=> {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map( f => {
                    if (f.id === action.friendId) {
                        return {...f, followed: true}
                    }
                    return f;
                        })
            };
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map( f => {
                    if (f.id === action.friendId) {
                        return {...f, followed: false}
                    }
                    return f;
                })
            };
        case GET_FRIENDS :
            return {
                ...state,
                friends: [...action.friends]
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }

        default :
            return state

    }
};

export let getFriends = (pageNumber, defaultPageSize) =>  (dispatch) => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${defaultPageSize}`)
            .then(res => {
                dispatch(getFriendsAC(res.data.items));
                dispatch(setTotalCountAC(res.data.totalCount))
            })




};

export const followAC = (friendId) => ({type: FOLLOW, friendId});
export const unfollowAC =(friendId) => ({type: UNFOLLOW, friendId});
export const getFriendsAC =(friends) => ({type: GET_FRIENDS, friends});
export const setFilterAC =(filter)=>({type: SET_FILTER, filter});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export let getFriendsItemsSelector = (state) => state.friendsPage.friends;
export let getFilterSelector = (state) => state.friendsPage.filter;

export let getFilteredFriendsReselector = createSelector(
    getFriendsItemsSelector,
    getFilterSelector,
    (friends, filter)=> {
        let newFilteredFriends = friends
        .filter(f => f.name.toUpperCase().indexOf(filter.toUpperCase()) > -1);
        return newFilteredFriends;
    }
);



export default FriendsPageReducer;
