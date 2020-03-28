const ADD_POST = 'ADD-POST';
const SET_POST_TEXT = 'SET-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, post: 'Post Yo Yo', likes: 5},
        {id: 2, post: 'Yo man', likes: 10},
        {id: 3, post: 'Yo Yo Yoda', likes: 15},
    ],
    newPostText: "text"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4, post: state.newPostText, likes: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case SET_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (inputText) => ({
    type: SET_POST_TEXT,
    newText: inputText
});

export default profileReducer;