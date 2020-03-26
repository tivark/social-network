import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {

    let state = props.store.getState();
    let newPostText = state.profilePage.newPostText;

    const updateInputText = (inputText) => {
        props.store.dispatch(updateNewPostTextActionCreator(inputText));
    };

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    return (
        <NewPost addPost={addPost} updateInputText={updateInputText} newPostText={newPostText}/>
    )
};

export default NewPostContainer;