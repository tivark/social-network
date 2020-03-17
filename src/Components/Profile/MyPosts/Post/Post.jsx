import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.image} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt=""/>
            {props.message}
            <div>
                <span>Like {props.likeCounts}</span>
            </div>
        </div>
    );
}

export default Post;