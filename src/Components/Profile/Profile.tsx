import React, {useEffect} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getUserProfile, getUserStatus} from "../../Redux/ProfileReducer";
import MyPosts from "./MyPosts/MyPosts";


function Profile() {
    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>()

    useEffect(() => {
        let userId = id
        if (!userId) {
            userId = '2'
        }
        dispatch(getUserProfile(+userId))
        dispatch(getUserStatus(+userId))
    },[])
    return (
        <div>
            <ProfileInfo />
            <MyPosts/>
        </div>
    )
}

export default Profile