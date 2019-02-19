import React from 'react';
import style from "./AddMessageItem.module.css";
import PropTypes from 'prop-types';

let AddMessageItem = (props) => {
    return (
        <li className={style.messageItem}>
            <img src={props.urlImg} className={style.messageIcon} />
            <p className={style.messageText}>{props.textMessage}</p>
        </li>
    )
};

AddMessageItem.propTypes = {
   urlImg: PropTypes.string,
    textMessage: PropTypes.string
};

export  default AddMessageItem;