import React from "react";
import classes from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostContent = React.createRef();

    function addPost() {
        alert(newPostContent.current.value);
    }

    return (
        <div className={classes.box}>
            <textarea ref={newPostContent} className={classes.inputTextPost} rows="4"></textarea>
            <button value="Add post" className={classes.addPostButton} onClick={addPost}>Add post</button>
        </div>
    )
}

export default NewPost;