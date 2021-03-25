import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../asserts/images/user.png";
import {InitialStateType} from "../../Redux/Users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
    onPageChange: (p: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

let Users = (props: PropsType) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={p} onClick={() => props.onPageChange(p)}
                             className={props.currentPage === p ? styles.selectedPage : ""}>{p}</span>
            })}
        </div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                   </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}
                            >UnFollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}
                            >Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>
            )
        }
    </div>
}


export default Users