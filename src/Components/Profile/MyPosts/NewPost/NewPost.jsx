import React from "react";
import classes from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostContent = React.createRef();

    const onInputChange = () => {
        let inputText = newPostContent.current.value;
        let action = {
            type: 'SET-POST-TEXT',
            newText: inputText
        };
        props.dispatch(action);
    };

    const addPost = () => {
        let action = {type: 'ADD-POST'};
        props.dispatch(action);
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