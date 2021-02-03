import {ActionsTypes, PostType, ProfilePageType} from "./store";


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my props", likesCount: 5},
        {id: 3, message: "Bla-bla", likesCount: 7},
        {id: 4, message: "Yo", likesCount: 3}
    ],
    newPostText: "it-cum"
};

function profileReducer(state: ProfilePageType = initialState, action: ActionsTypes) {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const

}
export const updateNewPostActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export default profileReducer