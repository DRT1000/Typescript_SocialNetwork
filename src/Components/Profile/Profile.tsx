import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type PostsPropsType = {
  store:StoreType
}

function Profile(props: PostsPropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile