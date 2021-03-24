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
    isFetching: boolean
    followingInProgress: Array<number>
}
const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET-USERS"
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
export const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
export const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS"

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
export type FetchingType = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}
export type FollowingType = {
    type: "TOGGLE-FOLLOWING-IN-PROGRESS"
    isFetching: boolean
    userId: number
}
type ActionsType =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPage
    | SetTotalUserCount
    | FetchingType
    | FollowingType

function usersReducer(state: InitialStateType = initialState, action: ActionsType): InitialStateType {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.totalUserCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unFollow = (userId: number): UnFollowActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCount = (totalUserCount: number): SetTotalUserCount => ({
    type: SET_TOTAL_USER_COUNT,
    totalUserCount
})
export const toggleIsFetching = (isFetching: boolean): FetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})


export const toggleFollowingProgress = (isFetching: boolean, userId: number): FollowingType => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching, userId
})


export default usersReducer