import React from 'react';
import style from "./FriendItem.module.css";
import PropTypes from "prop-types";

let FriendItem = (props) => {
    return (
        <div className={style.friendItem}>
            <a href={props.url} className={style.friendLink}><img src={props.photo} className={style.photo} width="70" height="70"/></a>
            <a href={props.url} className={style.friendLink}>{props.name}</a>
        </div>
    )
};

FriendItem.propTypes = {
  url: PropTypes.string,
  photo: PropTypes.string,
  name: PropTypes.string
};

export default FriendItem;