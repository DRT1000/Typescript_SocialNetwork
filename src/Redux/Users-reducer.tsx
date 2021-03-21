type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    small: string
    big: string
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
    pageSize: number
    totalUserCount: number
    currentPage: number
}
const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2
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
export type SetCurrentPage = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}
export type SetTotalUserCount = {
    type: "SET-TOTAL-USER-COUNT"
    totalUserCount: number
}

export type ActionsType =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPage
    | SetTotalUserCount

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
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USER-COUNT":
            return {...state, totalUserCount: action.totalUserCount}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId})
export const unFollowAC = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users})
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage})
export const totalUserCountAC = (totalUserCount: number) => ({type: "SET-TOTAL-USER-COUNT", totalUserCount})


export default usersReducer