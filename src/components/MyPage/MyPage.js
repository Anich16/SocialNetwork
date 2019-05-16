import React from 'react';

import MyInfo from "./MyInfo/MyInfo.js";
import MyPosts from "./MyPosts/MyPosts.js";
import style from "./MyPage.module.css";
import PropTypes from "prop-types";

let MyPage = (props) => {
    let infoBlock = props.info.map((info, index) => {
        return <MyInfo  img = {info.photo} name={info.name} day={info.birthDay} city={info.city} site={info.webSite} key = {index}/>
    });

    return (
        <div>
            <img src="https://bipbap.ru/wp-content/uploads/2017/09/1387999629_zimnyaya-skazka-14.jpg" className={style.fonImg}/>

            {infoBlock}

            <MyPosts posts={props.posts} newTextPost={props.newTextPost} addPost={props.addPost} addPostText={props.addPostText}/>
        </div>
    )
};

MyPage.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    birthDay: PropTypes.string,
    city: PropTypes.string,
    webSite: PropTypes.string,
    store: PropTypes.object,
    newTextPost: PropTypes.string
};

export default MyPage;