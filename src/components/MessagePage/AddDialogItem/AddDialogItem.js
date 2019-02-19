import React from 'react';
import style from "./AddDialogItem.module.css";
import PropTypes from "prop-types";


let AddDialogItem = (props) => {
    return (
        <li className={style.dialogItem}><a href={props.urlLink} className={style.dialogLink}>{props.nameFriend}</a></li>
    )
};

AddDialogItem.propTypes = {
  urlLink: PropTypes.string,
  nameFriend: PropTypes.string
};
export default AddDialogItem;