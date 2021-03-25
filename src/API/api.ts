import axios from "axios";
import {UserType} from "../Redux/Users-reducer";

type ResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "17e1ca4c-bac8-49fa-88f7-542bebb93142"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<ResponseType>(`users?page=${currentPage}&count=${pageSize}`)
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
    getProfile(userId: string) {
        return instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

