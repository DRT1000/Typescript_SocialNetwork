import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../Redux/store";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

function MyPosts(props: MyPostsPropsType) {
    let postElements = props.posts.map(
        (p) => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    function onAddPost() {
        props.addPost()
        // if (newPostElement.current) {
        //     props.dispatch( addPostActionCreator())
        // }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
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
                        <button onClick={onAddPost}>Add post</button>
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