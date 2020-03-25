const ADD_POST = 'ADD-POST';
const SET_POST_TEXT = 'SET-POST-TEXT';

const profileReducer = (state, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4, post: state.newPostText, likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case SET_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return state;
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (inputText) => ({
    type: SET_POST_TEXT,
    newText: inputText
});

export default profileReducer;