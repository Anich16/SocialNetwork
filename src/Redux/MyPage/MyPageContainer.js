import React from 'react';
import {connect} from "react-redux";
import MyPage from "../../components/MyPage/MyPage";
import {addPostActionCreator, addPostTextActionCreator} from "./MyPage.reducer";

let mapStateToProps = (state) => {
    return {
        info: state.myPage.info,
        posts: state.myPage.posts,
        newTextPost: state.myPage.newTextPost
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPostText: (text) => {
            dispatch(addPostTextActionCreator(text))
        },
        addPost: ()=> {
            dispatch(addPostActionCreator())
        }
    }
};


let MyPageContainer = connect (mapStateToProps, mapDispatchToProps) (MyPage);

export default MyPageContainer;