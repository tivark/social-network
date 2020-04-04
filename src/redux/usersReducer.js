const SET_USERS = 'SET_USERS';
const FOLLOW_SWITCH = 'FOLLOW_SWITCH';

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        case FOLLOW_SWITCH:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }
                    return user
                })
            };
        default:
            return state;
    }
};

export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const followSwitcherAC = (userId) => ({type: FOLLOW_SWITCH, userId: userId});

export default usersReducer;