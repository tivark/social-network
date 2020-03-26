import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

/*const NewPostContainer = (props) => {

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
};*/
let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        updateInputText: (inputText) => {
            dispatch(updateNewPostTextActionCreator(inputText))
        }
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;