import React from 'react';
import AddMessageItem from "../AddMessageItem/AddMessageItem.js";
import style from "./MyMessages.module.css"



let MyMessages = ({messages}) => {

    let messageItem = messages.map((message, index) => {
        return <AddMessageItem urlImg = {message.url} textMessage = {message.text} key = {index}/>
    });

    return (
        <ul className={style.messagesList}>

            {messageItem}

        </ul>

    )
};

export default MyMessages;