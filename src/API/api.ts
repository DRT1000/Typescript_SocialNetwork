import axios from "axios";
import {UserType} from "../Redux/Users-reducer";

type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "18adf875-4ad9-47b2-91e4-b16652e4335e"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {}, {})
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`, {})
    },
    getProfile(userId: number) {
        debugger
        return instance.get(`profile/` + userId);
    },
}

export const profileAPI = {
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}` )
    },
    updateStatus(status: string) {
        return instance.put<ResponseType<string>>(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

