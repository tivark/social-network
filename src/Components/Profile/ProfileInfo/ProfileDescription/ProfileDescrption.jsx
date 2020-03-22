import React from "react";
import classes from "./ProfileDescription.module.css";

const ProfileDescription = (props) => {
    return (
        <div className={classes.userInfo}>
            <div className={classes.avatar}>
                <img
                    src="https://www.pngarts.com/files/3/Avatar-PNG-Picture.png"
                    alt="" />
            </div>
            <div className={classes.details}>
                <div className={classes.name}>John Doe</div>
                <div className={classes.description}>
                    <div className={classes.city}>City</div>
                    <div className={classes.birthday}>Birthday</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDescription;