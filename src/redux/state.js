let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Post Yo Yo', likes: 5},
            {id: 2, post: 'Yo man', likes: 10},
            {id: 3, post: 'Yo Yo Yoda', likes: 15},
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dmitry'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Sveta'},
        ],
        messages: [
            {id: 1, message: 'message 1', sender: ''},
            {id: 2, message: 'Valera', sender: ''},
            {id: 3, message: 'Yo Yo ', sender:''},
        ]
    }
}

export default state;