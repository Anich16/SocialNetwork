import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from "./Redux/myStore.js";
import {applyMiddleware, combineReducers, createStore} from "redux";
import MyPageReducer from "./Redux/MyPage/MyPage.reducer.js";
import NavBarReducer from "./Redux/NavBar/NavBar.reducer.js";
import MessagesPageReducer from "./Redux/MessagePage/MessagesPage.reducer.js"
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import LoginReducer from "./Redux/Login/LoginReducer";
import thunk from "redux-thunk";
import authReducer from "./Redux/authReducer";
import PhotoPageReducer from "./Redux/PhotoPageReducer";
import FriendsPageReducer from "./Redux/FriendsPage/FriendsPageReducer";



let combinedReducers = combineReducers({
    myPage: MyPageReducer,
    messagesPage: MessagesPageReducer,
    navBar: NavBarReducer,
    login: LoginReducer,
    auth: authReducer,
    photo: PhotoPageReducer,
    friendsPage: FriendsPageReducer
});

let middleWare = applyMiddleware(thunk);

let store = createStore(combinedReducers, middleWare);

let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                 <App />
            </Provider>
        </BrowserRouter>
        , document.getElementById('root'));
};

renderPage();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
