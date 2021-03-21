import React from "react";
import {connect} from "react-redux";
import Users from "./UsersClass"
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setUsersAC, totalUserCountAC,
    unFollowAC,
    UserType
} from "../../Redux/Users-reducer";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    "FOLLOW": (userId: number) => void
    "UNFOLLOW": (userId: number) => void
    "SET-USERS": (users: Array<UserType>) => void
    "SET-CURRENT-PAGE": (currentPage: number) => void
    "SET-TOTAL-USER-COUNT": (totalUserCount: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        "FOLLOW": (userId: number) => {
            dispatch(followAC(userId))
        },
        "UNFOLLOW": (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        "SET-USERS": (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        "SET-CURRENT-PAGE": (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        "SET-TOTAL-USER-COUNT": (totalUserCount: number) => {
            dispatch(totalUserCountAC(totalUserCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)