import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.userPhoto}>
                <img className={classes.image} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                     alt=""/>
            </div>
            <div>
                {props.postContent}
            </div>
            <div>
                <span>Like {props.likeCounts}</span>
            </div>
        </div>
    );
}

export default Post;