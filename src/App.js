import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header.js";
import NavBar from "./components/Nav-bar/Nav-bar.js";
import MyPage from "./components/MyPage/MyPage.js";
import MessagePage from "./components/MessagePage/MessagePage";
import Footer from "./components/Footer/Footer.js";
import LoginForm from "./components/LoginForm/LoginForm.js"
import MyPageContainer from "./Redux/MyPageContainer";
import MessagePageContainer from "./Redux/MessagePageContainer";
import NavBarContainer from "./Redux/NavBarContainer";
import Friends from "./components/Friends/Friends";
import FriendsContainer from "./Redux/FriendsContainer";
import LoginContainer from "./Redux/LoginContainer";


let App = (props) => {
    return (
        <div className="app-project">


                <Header/>
                <NavBarContainer/>
            <main className="main">
                <Route exact path="/main" render={()=><MyPageContainer/>}/>
                <Route exact path="/main/myPage" render={() => <MyPageContainer/>}/>
                <Route exact path="/main/messagePage" render={() => <MessagePageContainer/>}/>
                <Route exact path="/main/friendsPage" render={() => <FriendsContainer/>}/>
                <Route exact path="/login" render={() => <LoginContainer />}/>
            </main>

            <Footer/>
        </div>
    )
};

export default App;
