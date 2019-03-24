import React from 'react';
import {connect} from "react-redux";
import MessagePage from "../../components/MessagePage/MessagePage";
import {addMessageElementActionCreator, addTextMessageActionCreator} from "./MessagesPage.reducer";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addTextMessage: (text) => {
            dispatch(addTextMessageActionCreator(text))
        },
        addMessageElement: () => {
            dispatch(addMessageElementActionCreator())
        }
    }
};

let MessagePageContainer = connect (mapStateToProps, mapDispatchToProps) (MessagePage);

export default MessagePageContainer;