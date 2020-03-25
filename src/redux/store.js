import profileReducer from './profileReducer';
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Post Yo Yo', likes: 5},
                {id: 2, post: 'Yo man', likes: 10},
                {id: 3, post: 'Yo Yo Yoda', likes: 15},
            ],
            newPostText: "text"
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Viktor',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ71ZEIFBgHdNxAKpmdO2xMP7lEr3BItvvm12k_w_9A9GkQxyjF'
                },
                {
                    id: 2,
                    name: 'Elena',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkaNaJ6unqn_D5vnxsvrH5ENvUvfEIPAUSj7h9z72SDwllaPir'
                },
                {
                    id: 3,
                    name: 'Sergei',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ71ZEIFBgHdNxAKpmdO2xMP7lEr3BItvvm12k_w_9A9GkQxyjF'
                },
                {id: 4, name: 'Alina', photo: 'https://www.utsa.edu/financialaffairs/budget/imgs/female_avatar.png'},
                {
                    id: 5,
                    name: 'Trump',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9Kj6cPQDCYYnGSFWl729oSTFLzKA2WWQII5Mzj_eYAwB88T_E'
                },
                {id: 6, name: 'Denis', photo: 'https://i.ya-webdesign.com/images/profile-image-png-14.png'},
            ]
        }
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};




export default store;