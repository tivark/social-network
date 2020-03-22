import React from "react";
import classes from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostContent = React.createRef();
    let addNewPost = () =>{
        if (newPostContent.current.value.length > 3) {
            let newText = newPostContent.current.value;
            newPostContent.current.value = '';
            props.addPost(newText);
        }
    }
    return (
        <div className={classes.box}>
            <textarea ref={newPostContent} className={classes.inputTextPost} rows="4"></textarea>
            <button value="Add post" className={classes.addPostButton} onClick={addNewPost}>Add post</button>
        </div>
    )
};

export default NewPost;