import {ActionsTypes} from "./redux-store";

export type PostType = {
    id: number
    message: string
    likesCount: number
}


export type InitialStateProfileType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my props", likesCount: 5},
        {id: 3, message: "Bla-bla", likesCount: 7},
        {id: 4, message: "Yo", likesCount: 3}
    ] as Array<PostType>,
    newPostText: "it-cum"
};

function profileReducer(state: InitialStateProfileType = initialState, action: ActionsTypes): InitialStateProfileType {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
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