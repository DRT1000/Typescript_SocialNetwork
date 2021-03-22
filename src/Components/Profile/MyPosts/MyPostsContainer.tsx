import React from "react";
import {
    addPost,
    InitialStateProfileType, updateNewPostText,
} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

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



const MyPostsContainer = connect(mapStateToProps, {updateNewPostText,addPost})(MyPosts)


export default MyPostsContainer