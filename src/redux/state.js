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
            {id: 1, message: 'Hello, World!', senderId: '1'},
            {id: 2, message: 'I\'m alive!', senderId: '1'},
            {id: 3, message: 'Yo Yo Yo', senderId:'2'},
        ]
    },
    sidebar:{
        friends:[
            {id: 1, name: 'Viktor', photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ71ZEIFBgHdNxAKpmdO2xMP7lEr3BItvvm12k_w_9A9GkQxyjF'},
            {id: 2, name: 'Elena', photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkaNaJ6unqn_D5vnxsvrH5ENvUvfEIPAUSj7h9z72SDwllaPir'},
            {id: 3, name: 'Sergei', photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ71ZEIFBgHdNxAKpmdO2xMP7lEr3BItvvm12k_w_9A9GkQxyjF'},
            {id: 4, name: 'Alina', photo:'https://lh3.googleusercontent.com/proxy/5_id8L0wjXQfjLR6IqG74uY2TfPCy117Sd0xcy0l6Gw8SI9aayCZJZrK2Vygcew7amGoiKtxdhrbkUVIDMct'},
            {id: 5, name: 'Trump', photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9Kj6cPQDCYYnGSFWl729oSTFLzKA2WWQII5Mzj_eYAwB88T_E'},
            {id: 6, name: 'Denis', photo:'https://i.ya-webdesign.com/images/profile-image-png-14.png'},
        ]
    }
}

export default state;