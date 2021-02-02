import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {
    ActionsTypes,
    addPostActionCreator,
    PostType,
    updateNewPostActionCreator,
} from "../../../Redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: MyPostsPropsType) {
    let postElements = props.posts.map(
        (p) => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        if (newPostElement.current) {
            props.dispatch( addPostActionCreator())
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text=e.currentTarget.value
        let action=updateNewPostActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}
                                  onChange={onPostChange}
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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