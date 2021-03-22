import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/ProfileReducer";

type ProfileInfoPropsType = {
    profile: null| ProfileType
}
function ProfileInfo(props:ProfileInfoPropsType) {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDB4r0Jio5vMx8xr6Adx4jdiUkvChSWEgFcA&usqp=CAU"/>*/}
            {/*</div>*/}
            <div className={s.description}>
                <img src={props.profile ? props.profile.photos.large : ''}/>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo