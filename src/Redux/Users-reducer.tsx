type LocationType = {
    city: string
    country: string
}
type PhotosType={
    small:string
    big:string
}
export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    photos: PhotosType
    location: LocationType
}
export type InitialStateType = {
    users: Array<UserType>
}
const initialState: InitialStateType = {
    users: []
}


export type FollowActionType = {
    type: "FOLLOW"
    userId: number
}
export type UnFollowActionType = {
    type: "UNFOLLOW"
    userId: number
}
export type SetUsersActionType = {
    type: "SET-USERS"
    users: Array<UserType>
}

export type ActionsType = FollowActionType | UnFollowActionType | SetUsersActionType

function usersReducer(state: InitialStateType = initialState, action: ActionsType): InitialStateType {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId})
export const unFollowAC = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users})


export default usersReducer