import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from "./NewPost/NewPost";

const  MyPosts = (props) => {
    let postList = props.posts.map(item => (<Post postContent={item.post} likeCounts={item.likes} key={item.id}/>));
    return (
        <div className={classes.box}>
            <span className={classes.title}>My posts</span>
            <NewPost addPost={props.addPost}
                     newPostText={props.newPostText}
                     setNewPostText={props.setNewPostText}/>
            <div className={classes.posts}>
                {postList}
            </div>
        </div>
    );
}

export default MyPosts;