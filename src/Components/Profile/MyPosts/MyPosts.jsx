import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return(
            <div className={classes.allPosts}>My posts
                <div className={classes.newPost}>New post</div>
                <div className={classes.posts}>
                    <Post />
                    <Post />
                </div>
            </div>
    );
}

export default MyPosts;