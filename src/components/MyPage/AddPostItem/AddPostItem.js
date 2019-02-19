import React from 'react';
import style from "./AddPostItem.module.css";
import PropTypes from "prop-types";

let AddPostItem = (props) => {
    return (
        <div className={style.postItem}>
            <img src={props.urlImage} className={style.avatarPhoto} />
            <p className={style.postText}>{props.postText}</p>
        </div>
    )
};

AddPostItem.propTypes ={
  urlImg: PropTypes.string,
  postText: PropTypes.string
};

export default AddPostItem;

