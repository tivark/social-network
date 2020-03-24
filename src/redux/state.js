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
    _rerenderEntireTree() {
        console.log('state was changed');
    },
    addPost() {
        let newPost = {
            id: 4, post: this._state.profilePage.newPostText, likes: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },
    setNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    addNewMessage() {
        let messageItem = {
            id: 4, message: this._state.messagesPage.currentMessage, senderId: 1
        };
        this._state.messagesPage.messages.push(messageItem);
        this._state.messagesPage.currentMessage = '';
        this._rerenderEntireTree(this._state);
    },
    setNewMessageText(newText) {
        this._state.messagesPage.currentMessage = newText;
        this._rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state;
    }

};


export default store;