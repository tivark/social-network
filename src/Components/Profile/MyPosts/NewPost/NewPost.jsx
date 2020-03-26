import React from "react";
import classes from "./NewPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";

const NewPost = (props) => {

    const onInputChange = (e) => {
        let inputText = e.target.value;
        props.updateInputText(inputText);
    };

    const onAddPost = () => {
        props.addPost();
    };

    return (
        <div className={classes.box}>
            <textarea className={classes.inputTextPost}
                      rows="4"
                      value={props.newPostText}
                      onChange={onInputChange}/>
            <button value="Add post" className={classes.addPostButton} onClick={onAddPost}>Add post</button>
        </div>
    )
};

export default NewPost;