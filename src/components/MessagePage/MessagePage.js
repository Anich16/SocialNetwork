import React from 'react';
import AddMessageItem from "./AddMessageItem/AddMessageItem.js";
import MyMessages from "./MyMessages/MyMessages.js";
import MyDialogsList from "./MyDialogsList/MyDialogsList.js";
import style from "./MessagePage.module.css";
import {addMessageElementActionCreator, addTextMessageActionCreator} from "../../Redux/MessagePage/MessagesPage.reducer";

let MessagePage = (props) => {
    let textareaElement = React.createRef();
    let changeTextarea = () => {
      let text = textareaElement.current.value;
      props.addTextMessage(text);
    };
    let addMessage = (e) => {
        e.preventDefault();
        props.addMessageElement();
    };

    return (
        <div className={style.messagesPage}>
            <div className={style.dialogs}>
                <MyDialogsList dialogs = {props.messagesPage.dialogs}/>
            </div>
            <div className={style.messages}>
                <MyMessages messages = {props.messagesPage.messages}/>

                <div className={style.createMessage}>
                    <form className={style.sendMessage}>
                        <textarea className={style.messageText} placeholder="Write message" rows="4" onChange={changeTextarea} value={props.newTextMessage} ref={textareaElement}/>
                        <button type="submit" className={style.buttonSend} onClick={addMessage}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default MessagePage;