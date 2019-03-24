import React from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header.js";
import NavBar from "./components/Nav-bar/Nav-bar.js";
import MyPage from "./components/MyPage/MyPage.js";
import MessagePage from "./components/MessagePage/MessagePage";
import Footer from "./components/Footer/Footer.js";
import LoginForm from "./components/LoginForm/LoginForm.js"
import MyPageContainer from "./Redux/MyPage/MyPageContainer";
import MessagePageContainer from "./Redux/MessagePage/MessagePageContainer";
import NavBarContainer from "./Redux/NavBar/NavBarContainer";
import FriendsContainer from "./Redux/Friends/FriendsContainer";
import LoginContainer from "./Redux/Login/LoginContainer";
import {connect} from "react-redux";
import HeaderContainer from "./components/Header/Header";
import PhotoPageContainer from "./components/PhotoPage/PhotoPage";


let MainPage = (props) => {
    return <div className="app-project">
        <HeaderContainer/>
        <NavBarContainer/>
        <main className="main">
            <Route exact path="/" render={() => <MyPageContainer/>}/>
            <Route exact path="/myPage" render={() => <MyPageContainer/>}/>
            <Route exact path="/messagePage" render={() => <MessagePageContainer/>}/>
            <Route exact path="/friendsPage" render={() => <FriendsContainer/>}/>
            <Route exact path="/photoPage" render={()=> <PhotoPageContainer/>}/>
        </main>

        <Footer/>
    </div>
};

let App = (props) => {
        {if (props.isAuth){
           return <MainPage/>
    } else {
            return   <LoginContainer/>
    }}


};

let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth
    }
};

let AppContainer = connect (mapStateToProps, null) (App);

export default withRouter(AppContainer);
