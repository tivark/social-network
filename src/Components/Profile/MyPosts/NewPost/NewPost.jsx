import React from "react";
import classes from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostContent = React.createRef();

    let addNewPost = () => {
        if (newPostContent.current.value.length > 3) {
            let newText = newPostContent.current.value;
            newPostContent.current.value = '';
            props.addPost(newText);
        }
    }

    let onInputChange = () =>{
        console.log(newPostContent.current.value);
    }

    return (
        <div className={classes.box}>
            <textarea ref={newPostContent}
                      className={classes.inputTextPost}
                      rows="4"
                      value={props.newPostText}
                      onChange={onInputChange}/>
            <button value="Add post" className={classes.addPostButton} onClick={addNewPost}>Add post</button>
        </div>
    )
};

export default NewPost;