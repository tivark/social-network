const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Vitali',
            status: 'i\'m a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Sergei',
            status: 'i\'m a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Victor',
            status: 'i\'m a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ]
};

const usersReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});

export default usersReducer;