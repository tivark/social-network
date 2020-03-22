import React from "react";
import classes from "./NewPost.module.css";

const NewPost = (props) => {
    return(
        <div className={classes.box}>
            <input type="text" className={classes.inputTextPost}/>
            <input type="button" value="Add post" className={classes.addPostButton}/>
        </div>
    )
}

export default NewPost;