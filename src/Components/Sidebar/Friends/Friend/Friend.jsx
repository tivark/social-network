import React from "react";
import classes from "./Friend.module.css";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <div className={classes.box}>
            <NavLink to={`/profile/${props.state.id}`}>
                <div className={classes.userPhotoWrapper}>
                    <img src={props.state.photo} alt="" className={classes.userPhoto}/>
                </div>
                <div className={classes.userName}>
                    {props.state.name}
                </div>
            </NavLink>
        </div>
    )
}

export default Friend;