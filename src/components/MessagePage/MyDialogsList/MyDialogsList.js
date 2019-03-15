import React from 'react';
import AddDialogItem from "../AddDialogItem/AddDialogItem";
import style from "./MyDialogList.module.css";
import PropTypes from "prop-types";



let MyDialogsList = (props) => {
        let dialogItem = props.dialogs.map((dialog) => {
            return <AddDialogItem urlLink = {dialog.url} nameFriend = {dialog.name} key={dialog.id}/>
        });

    return (
        <ul className={style.dialogsList}>

            {dialogItem}


            <li className={style.dialogItem}><a href="#" className={style.dialogLink}>New dialog</a></li>
        </ul>
    )
};

MyDialogsList.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number
};

export  default MyDialogsList;