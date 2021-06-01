import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import {InitialStateProfileType} from "../../../Redux/ProfileReducer";
import ProfileStatus from "./ProfileStatus";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";



function ProfileInfo() {
    const {profile, status} = useSelector<AppStateType, InitialStateProfileType>(state => state.profilePage)

    if (!profile) {
        debugger
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.description}>
                <img src={profile ? profile.photos.large : ''}/>
                <ProfileStatus status={status} />
            </div>
        </div>
    )
}

export default ProfileInfo