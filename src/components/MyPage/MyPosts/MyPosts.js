import React from 'react';
import AddPostItem from "../AddPostItem/AddPostItem.js";
import style from "./MyPosts.module.css";
import PropTypes from "prop-types";
import {addPostTextActionCreator, addPostActionCreator} from "../../../Redux/MyPage/MyPage.reducer.js";


let MyPosts = (props) => {

    let textareaElement = React.createRef();
    let postItem = props.posts.map((post) => {
        return <AddPostItem urlImage = {post.url} postText = {post.text} key = {post.id}/>
    });
    let changeTextarea = ()=> {
      let text = textareaElement.current.value;
      props.addPostText(text);
    };
    let addPostItem = (e) => {
        e.preventDefault();
        props.addPost();
    };

    return (
        <div className={style.postsBlock}>
            <form className={style.postForm}>
                <p className="title">My posts</p>
                <textarea className={style.newText} placeholder="Your news..." rows="5" onChange={changeTextarea} value={props.newTextPost} ref={textareaElement}/>
                <button type="button" className={style.buttonSend} onClick={addPostItem}>Send</button>
            </form>
            <div className={style.postList}>

                {postItem}

            </div>
        </div>
    )
};

MyPosts.proptypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number
};

export default MyPosts;