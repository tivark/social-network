let initialState = {
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
};

const sidebarReducer = (state = initialState, action) =>{
    return state;
};

export default sidebarReducer;