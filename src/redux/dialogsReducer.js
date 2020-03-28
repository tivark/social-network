const SET_MESSAGE_TEXT = 'SET-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sveta'},
    ],
    messages: [
        {id: 1, message: 'Hello, World!', senderId: '1'},
        {id: 2, message: 'I\'m alive!', senderId: '1'},
        {id: 3, message: 'Yo Yo Yo', senderId: '2'},
    ],
    currentMessage: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.currentMessage = action.newText;
            return stateCopy;
        }
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            let messageItem = {
                id: 4, message: state.currentMessage, senderId: 1
            };
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(messageItem);
            stateCopy.currentMessage = '';
            return stateCopy;
        }
        default:
            return state;
    }
};
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (inputText) => ({
    type: SET_MESSAGE_TEXT,
    newText: inputText
});

export default dialogsReducer;