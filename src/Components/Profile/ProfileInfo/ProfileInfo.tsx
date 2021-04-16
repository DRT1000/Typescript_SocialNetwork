import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/ProfileReducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: null | ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.description}>
                <img src={props.profile ? props.profile.photos.large : ''}/>
                <ProfileStatus status={props.status} updateStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo