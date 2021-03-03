import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unFollowAC, UserType} from "../../Redux/Users-reducer";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
}
type MapDispatchPropsType = {
    "FOLLOW": (userId: number) => void
    "UNFOLLOW": (userId: number) => void
    "SET-USERS": (users: Array<UserType>) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)