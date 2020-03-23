import React from "react";
import classes from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostContent = React.createRef();

    let onInputChange = () =>{
        let inputText = newPostContent.current.value;
        props.setNewPostText(inputText);
    }

    return (
        <div className={classes.box}>
            <textarea ref={newPostContent}
                      className={classes.inputTextPost}
                      rows="4"
                      value={props.newPostText}
                      onChange={onInputChange}/>
            <button value="Add post" className={classes.addPostButton} onClick={props.addPost}>Add post</button>
        </div>
    )
};

export default NewPost;