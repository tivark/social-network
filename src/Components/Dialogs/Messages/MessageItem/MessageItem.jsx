import React from "react";
import classes from "./MessageItem.module.css";

const MessageItem = (props) => {
    let selfClass = props.state.senderId === "2" ? classes.self : '';
    return (
        <div className={`${classes.box} ${selfClass}`}>
            <div className={classes.userPhotoWrapper}>
                <img src="https://cdn.dribbble.com/users/588874/screenshots/2249528/dribbble.png" alt="" className={classes.userPhoto}/>
            </div>
            <div className={classes.message}>{props.state.message}</div>
        </div>
    )
}
export default MessageItem;