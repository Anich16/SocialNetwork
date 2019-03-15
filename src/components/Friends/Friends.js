import React from 'react';
import * as axios from "axios";
import {statuses} from "../../Redux/Friends.reducer";
import style from "./Friends.module.css";


let Friends = (props) => {
        if(props.status === statuses.NOT_INITIALIZED
)
    {
        props.setStatus(statuses.INPROGRESS);
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users?count=30")
            .then((res) => {
                props.setStatus(statuses.SUCCESS);
                props.setUsers(res.data.items);
            })
    }

    if (!props.users.length) {
        return <div>Users not found</div>
    }

    return <div className={style.friendsBlock}> {props.users.map(user =>
        <div className={style.friendsItem}>
            <img src={user.photos.small == null ? "https://via.placeholder.com/100" : user.photos.small}
                    className={style.photoFriend}/>
            <div className={style.nameFriend}>{user.name}</div>
            <div className={style.statusFriend}>{user.status ? user.status : 'no status'}</div>
        </div>
    )
    }
    </div>

};

export default Friends;