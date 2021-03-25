import {usersAPI} from "../API/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET-USER-PROFILE"


type AddPostType = {
    type: "ADD-POST"
}
type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
type SetUserProfileType = {
    type: "SET-USER-PROFILE"
    profile: ProfileType
}
type ActionsTypes = AddPostType | UpdateNewPostTextType | SetUserProfileType
type ContactsType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: null | string
    twitter: string | null
    vk: string | null
    website: null | string
    youtube: null | string
}
type PhotosType = {
    large: string
    small: string
}
export type ProfileType = {
    aboutMe: string | null
    contacts: ContactsType
    fullName: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: PhotosType
    userId: number
}

export type InitialStateProfileType =
    {
        posts: Array<PostType>
        newPostText: string
        profile: null | ProfileType
    }

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my props", likesCount: 5},
        {id: 3, message: "Bla-bla", likesCount: 7},
        {id: 4, message: "Yo", likesCount: 3}
    ],
    newPostText: "it-cum",
    profile: null
}

function profileReducer(state: InitialStateProfileType = initialState, action: ActionsTypes): InitialStateProfileType {
    switch (action.type) {
        case ADD_POST:
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPost = (): AddPostType => {
    return {type: ADD_POST}
}
export const updateNewPostText = (newText: string): UpdateNewPostTextType => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText}
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {type: SET_USER_PROFILE, profile}
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>

export const getUserProfile = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export default profileReducer