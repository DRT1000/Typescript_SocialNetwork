import React, {useCallback, useEffect} from "react";
import styles from "./users.module.css";
import userPhoto from "../../asserts/images/user.png";
import {follow, getUsers, InitialUserStateType, unfollow} from "../../Redux/Users-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import Preloader from "../Common/Preloader/Preloader";


let Users = () => {

    const users = useSelector<AppStateType, InitialUserStateType>(state => state.users)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsers(users.currentPage, users.pageSize))
    }, [])

    const onPageChange = useCallback((pageNumber: number) => {
        dispatch(getUsers(pageNumber, users.pageSize))
    }, [dispatch])

    let pageCount = Math.ceil(users.totalUserCount / users.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <React.Fragment>
            {users.isFetching ? <Preloader/> : null}
            <div>
                {pages.map(p => {
                    return <span key={p} onClick={() => onPageChange(p)}
                                 className={users.currentPage === p ? styles.selectedPage : ""}>{p}</span>
                })}
            </div>
            {
                users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img
                            src={u.photos.small !== null ? u.photos.small : userPhoto}
                            className={styles.usersPhoto}
                        />
                   </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={users.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          dispatch(unfollow(u.id))
                                      }}
                            >UnFollow</button>
                            : <button disabled={users.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          dispatch(follow(u.id))
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
        </React.Fragment>
    )
}


export default Users