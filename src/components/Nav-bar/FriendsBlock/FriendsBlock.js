import React from 'react';
import style from "./FriendsBlock.module.css";
import FriendItem from "./../FriendItem/FriendItem.js";
import PropTypes from "prop-types";

let FriendsBlock = ({friendsList}) => {
    return (
        <div className={style.friendsSection}>
            <a href="#" className={style.link}>Friends</a>
            <div className={style.friendsBlock}>
                {
                    friendsList.map((item) => {
                    return <FriendItem url={item.url} name={item.name} photo={item.photo} key={item.index} />
                   })
                    }
            </div>
        </div>
    )
    };

FriendsBlock.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    key: PropTypes.number
};

export default FriendsBlock;
