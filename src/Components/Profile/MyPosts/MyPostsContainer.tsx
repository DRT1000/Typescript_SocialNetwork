import React from "react";
import { StoreType,} from "../../../Redux/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store:StoreType
}

function MyPostsContainer(props: MyPostsPropsType) {
    let state = props.store.getState()

    function addPost() {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text:string) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 updateNewPostText={onPostChange}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}
        />
    )
}


export default MyPostsContainer