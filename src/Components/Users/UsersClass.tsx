import React from "react";
import styles from "./users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../asserts/images/user.png"


class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props["SET-USERS"](response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.UNFOLLOW(u.id)}>UnFollow</button>
                            : <button onClick={() => this.props.FOLLOW(u.id)}>Follow</button>}
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
}

export default Users