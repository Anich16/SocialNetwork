import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header.js";
import NavBar from "./components/Nav-bar/Nav-bar.js";
import MyPage from "./components/MyPage/MyPage.js";
import MessagePage from "./components/MessagePage/MessagePage";
import  Footer from "./components/Footer/Footer.js";
import LoginForm from "./components/LoginForm/LoginForm.js"



let App = ({state, store}) => {
  return (
      <BrowserRouter>
          <div className="app-project">
            <Header />
            <NavBar navBar={state.navBar}/>
              <main className="main">
                <Route exact path = "/myPage" render={() => <MyPage myPage={state.myPage}
                                                                    newTextPost={state.myPage.newTextPost}
                                                                    store={store}/>} />
                <Route exact path = "/messagePage" render={() => <MessagePage messagesPage = {state.messagesPage}
                                                                              newTextMessage={state.messagesPage.newTextMessage}
                                                                              store={store} />}/>
              {/*<LoginForm />*/}
                </main>
              <Footer />



          </div>
      </BrowserRouter>
  )
};

export default App;
