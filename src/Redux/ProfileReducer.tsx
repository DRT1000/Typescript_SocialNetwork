import {profileAPI, usersAPI} from "../API/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";


export type PostType = {
    id: number
    message: string
    likesCount: number
}

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"


type AddPostType = {
    type: "ADD-POST",
    postText:string
}

type SetUserProfileType = {
    type: "SET-USER-PROFILE"
    profile: ProfileType
}
type ActionsTypes = AddPostType | SetUserProfileType | SetStatusType
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

export type InitialStateProfileType = {
    posts: Array<PostType>
    profile: null | ProfileType
    status: string
}

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my props", likesCount: 5},
        {id: 3, message: "Bla-bla", likesCount: 7},
        {id: 4, message: "Yo", likesCount: 3}
    ],
    profile: null,
    status: ""
}

function profileReducer(state: InitialStateProfileType = initialState, action: ActionsTypes): InitialStateProfileType {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = (postText:string): AddPostType => {
    return {type: ADD_POST, postText}
}

export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {type: SET_USER_PROFILE, profile}
}
export const setStatus = (status: string) => {
    return {type: 'SET-STATUS', status} as const
}
type SetStatusType = ReturnType<typeof setStatus>

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>


//TC
export const getUserProfile = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        usersAPI.getProfile(userId)
            .then(response => {
                debugger
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        debugger
        profileAPI.getStatus(userId).then(res => {
            debugger
            dispatch(setStatus(res.data))
        })
    }
}

export const updateUserStatus = (status: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        profileAPI.updateStatus(status)
            .then((res) => {
                dispatch(setStatus(status))
            })
    }
}

export default profileReducer