import React from "react";
import classes from "./CoverImage.module.css";

const CoverImage = (props) => {
    return (
        <div className={classes.coverWrapper}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg" className={classes.cover} alt="" />
        </div>
    )
}

export default CoverImage;