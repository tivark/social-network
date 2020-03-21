import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postList = props.allPosts.map( item => (<Post message={item.post} likeCounts={item.likes}/>) );
    return(
            <div className={classes.allPosts}>My posts
                <div className={classes.newPost}>New post</div>
                <div className={classes.posts}>
                    {postList}
                </div>
            </div>
    );
}

export default MyPosts;