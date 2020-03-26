import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostContainer from "./NewPost/NewPostContainer";

const  MyPosts = (props) => {
    let postList = props.postList.map(item => (<Post postContent={item.post} likeCounts={item.likes} key={item.id}/>));
    return (
        <div className={classes.box}>
            <span className={classes.title}>My posts</span>
            <NewPostContainer/>
            <div className={classes.posts}>
                {postList}
            </div>
        </div>
    );
};

export default MyPosts;