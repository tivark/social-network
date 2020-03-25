import React from "react";
import classes from "./NewPost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/store";

const NewPost = (props) => {

    let newPostContent = React.createRef();

    const onInputChange = (e) => {
        let inputText = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(inputText));
    };

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div className={classes.box}>
            <textarea ref={newPostContent}
                      className={classes.inputTextPost}
                      rows="4"
                      value={props.newPostText}
                      onChange={onInputChange}/>
            <button value="Add post" className={classes.addPostButton} onClick={addPost}>Add post</button>
        </div>
    )
};

export default NewPost;