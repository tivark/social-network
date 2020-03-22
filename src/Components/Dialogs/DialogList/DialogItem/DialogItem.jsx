import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.data.id}`;
    return (
        <div className={classes.box}>
            <NavLink to={path} activeClassName={classes.active}>
                <div className={classes.userPreviewWrapper}>
                    <div className={classes.userPhotoWrapper}>
                        <img className={classes.userPhoto}
                             src="https://cdn.dribbble.com/users/588874/screenshots/2249528/dribbble.png"/>
                    </div>
                    <span className={classes.userName}>{props.data.name}</span>
                </div>
            </NavLink>
        </div>
    )
}
export default DialogItem;