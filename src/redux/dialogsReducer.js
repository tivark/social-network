const SET_MESSAGE_TEXT = 'SET-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) =>{
    switch (action.type) {
        case SET_MESSAGE_TEXT:
            state.currentMessage = action.newText;
            break;
        case ADD_MESSAGE:
            let messageItem = {
                id: 4, message: state.currentMessage, senderId: 1
            };
            state.messages.push(messageItem);
            state.currentMessage = '';
            break;
    }
    return state;
};
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (inputText) => ({
    type: SET_MESSAGE_TEXT,
    newText: inputText
});

export default dialogsReducer;