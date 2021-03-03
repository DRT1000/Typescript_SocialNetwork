import React from "react";
import {
    addPostActionCreator,
    InitialStateProfileType,
    updateNewPostActionCreator
} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    profilePage:InitialStateProfileType
}
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
export type MyPostsType = MapStatePropsType & MapDispatchPropsType

function mapStateToProps(state: MapStatePropsType): MapStatePropsType {
    return {
        profilePage: state.profilePage
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchPropsType {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer