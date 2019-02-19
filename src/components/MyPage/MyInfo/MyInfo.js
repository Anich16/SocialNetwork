import React from 'react';
import style from "./MyInfo.module.css";
import PropTypes from 'prop-types';

let MyInfo = (props) => {
    return (
        <div className={style.description}>
            <img src={props.img} className={style.avatarPhoto} />
            <div className={style.infoAbout}>
                <p className={style.title}>Name: <span className={style.info}>{props.name}</span></p>
                <p className={style.title}>Date of Birth: <span className={style.info}>{props.day}</span></p>
                <p className={style.title}>City: <span className={style.info}>{props.city}</span></p>
                <p className={style.title}>Web Site: <span className={style.info}>{props.site}</span></p>
            </div>
        </div>
    )
};

MyInfo.propTypes  = {
        name: PropTypes.oneOf(["Pasha", "Olaf"]),
        day: PropTypes.string,
        city: PropTypes.string,
        site: PropTypes.string
};
export default MyInfo;