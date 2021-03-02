import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";



function mapStateToProps(state: AppStateType) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer