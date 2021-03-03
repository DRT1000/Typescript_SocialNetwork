import React from "react";
import styles from "./users.module.css"
import {UsersPropsType} from "./UsersContainer";


function Users(props: UsersPropsType) {
    if (props.usersPage.users.length === 0) {
        props["SET-USERS"]([
            {
                id: 1,
                photoURL: "https://cdn.vox-cdn.com/thumbor/cQCcBMPS8yIh9PHBXcazmwkq8vo=/0x0:2842x1470/1400x1050/filters:focal(1209x317:1663x771):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/53961067/bossbabycover.0.jpg",
                followed: false,
                fullName: "Mike",
                status: "Boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoURL: "https://cdn.vox-cdn.com/thumbor/cQCcBMPS8yIh9PHBXcazmwkq8vo=/0x0:2842x1470/1400x1050/filters:focal(1209x317:1663x771):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/53961067/bossbabycover.0.jpg",
                followed: true,
                fullName: "Nick",
                status: "Big Boss",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoURL: "https://cdn.vox-cdn.com/thumbor/cQCcBMPS8yIh9PHBXcazmwkq8vo=/0x0:2842x1470/1400x1050/filters:focal(1209x317:1663x771):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/53961067/bossbabycover.0.jpg",
                followed: false,
                fullName: "Helen",
                status: "Small Bass",
                location: {city: "Kiev", country: "Ukraine"}
            }
        ])
    }
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.UNFOLLOW(u.id)}>UnFollow</button>
                            : <button onClick={() => props.FOLLOW(u.id)}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>
            )
        }
    </div>

}

export default Users