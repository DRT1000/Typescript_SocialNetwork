type LocationType = {
    city: string
    country: string
}
type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type InitialStateType = {
    users: Array<UserType>
}
const initialState: InitialStateType = {
    users: []
}

let stateInit = {
    users: [
        {id: 1, followed: false, fullName: "Mike", status: "Boss", location: {city: "Minsk", country: "Belarus"}},
        {id: 2, followed: true, fullName: "Nick", status: "Big Boss", location: {city: "Moscow", country: "Russia"}},
        {id: 3, followed: false, fullName: "Helen", status: "Small Bass", location: {city: "Kiev", country: "Ukraine"}}
    ],
};

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

function usersReducer(state: InitialStateType = initialState, action: ActionsType) {
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