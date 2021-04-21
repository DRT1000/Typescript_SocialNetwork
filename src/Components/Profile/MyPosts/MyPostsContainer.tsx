import React from "react";
import {
    addPost,
    InitialStateProfileType
} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

type MapStatePropsType = {
    profilePage:InitialStateProfileType
}
type MapDispatchPropsType = {
    addPost: (postText:string) => void
}
export type MyPostsType = MapStatePropsType & MapDispatchPropsType

function mapStateToProps(state: MapStatePropsType): MapStatePropsType {
    return {
        profilePage: state.profilePage
    }
}



const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)


export default MyPostsContainer