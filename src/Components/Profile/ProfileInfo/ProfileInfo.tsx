import React from "react";
import s from "./ProfileInfo.module.css"


function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDB4r0Jio5vMx8xr6Adx4jdiUkvChSWEgFcA&usqp=CAU"/>
            </div>
            <div className={s.description}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo