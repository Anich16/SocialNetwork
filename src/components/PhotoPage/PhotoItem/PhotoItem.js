import React from "react";
import style from "./PhotoItem.module.css";

let PhotoItem = (props) => {
    return <div className={style.photoItem}>
        <img src={props.imgUrl} alt="Photo" className={style.photo}/>
    </div>


};



export default PhotoItem;