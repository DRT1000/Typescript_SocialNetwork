import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePageType} from "../../../Redux/state";




function MyPosts(props:ProfilePageType) {
    let postElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}

            </div>
        </div>
    )
}

export default MyPosts