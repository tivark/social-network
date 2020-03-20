import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postData = [
        {id: 1, post: 'message 1', likes: 5},
        {id: 2, post: 'Valera', likes: 10},
        {id: 3, post: 'Yo Yo', likes: 15},
    ];
    let postList = postData.map( item => (<Post message={item.post} likeCounts={item.likes}/>) );
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