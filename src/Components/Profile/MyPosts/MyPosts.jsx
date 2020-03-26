import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostContainer from "./NewPost/NewPostContainer";

const  MyPosts = (props) => {
    let state = props.store.getState();
    let postList = state.profilePage.posts.map(item => (<Post postContent={item.post} likeCounts={item.likes} key={item.id}/>));
    return (
        <div className={classes.box}>
            <span className={classes.title}>My posts</span>
            <NewPostContainer store={props.store}/>
            <div className={classes.posts}>
                {postList}
            </div>
        </div>
    );
}

export default MyPosts;