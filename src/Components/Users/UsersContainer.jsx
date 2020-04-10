import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import { followSwitcherAC, setUsersAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.pageSize,
        totalUsersCount: state.totalUsersCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        followSwitcher: (userId) => {
            dispatch(followSwitcherAC(userId))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;