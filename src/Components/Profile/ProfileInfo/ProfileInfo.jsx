import React from "react";
import classes from "./ProfileInfo.module.css";
import CoverImage from "./CoverImage/CoverImage";
import ProfileDescription from "./ProfileDescription/ProfileDescrption";

const ProfileInfo = (props) => {
    return (
        <div className={classes.profileInfoWrapper}>
            <CoverImage />
            <ProfileDescription />
        </div>
    )
}

export default ProfileInfo;