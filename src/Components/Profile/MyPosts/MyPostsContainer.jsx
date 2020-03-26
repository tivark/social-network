import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        postList: state.profilePage.posts
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;