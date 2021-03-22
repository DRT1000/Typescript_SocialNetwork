const SET_USER_DATA = "SET-USER-DATA"


export type DataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetUserDataActionType = {
    type: "SET-USER-DATA"
    data: DataType
}
type ActionsType = SetUserDataActionType

const initialState: DataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: DataType = initialState, action: ActionsType): DataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}

export const setUserData = (data: DataType): SetUserDataActionType => ({type: SET_USER_DATA, data})


export default authReducer