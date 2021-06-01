import {authAPI} from "../API/api";
import {Dispatch} from "redux";


export type DataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
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
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (data: DataType) => ({type: 'SET_USER_DATA', data} as const)

type SetUserDataActionType = ReturnType<typeof setUserData>

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(response.data.data))
                }
            })
    }
}


export default authReducer