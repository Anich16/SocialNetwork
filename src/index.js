import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from "./Redux/myStore.js";
import {combineReducers, createStore} from "redux";
import MessagePage from "./components/MessagePage/MessagePage";
import MyPageReducer from "./Redux/MyPage.reducer.js";
import NavBarReducer from "./Redux/NavBar.reducer.js";
import MessagesPageReducer from "./Redux/MessagesPage.reducer.js"


let combinedReducers =combineReducers({
    myPage: MyPageReducer,
    messagesPage: MessagesPageReducer,
    navBar: NavBarReducer
});

let store =createStore(combinedReducers);

store.subscribe(() => {
    let state = store.getState();
    renderPage(state)
});

let renderPage = () => {
    ReactDOM.render(<App state={store.getState()}
                         store={store}
    />, document.getElementById('root'));
};

    renderPage();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
