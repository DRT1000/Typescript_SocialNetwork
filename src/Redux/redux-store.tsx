import {combineReducers, createStore} from "redux"
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer"
import usersReducer from "./Users-reducer";
import authReducer from "./authReducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer
})

let store = createStore(rootReducer);
export type AppStateType = ReturnType<typeof rootReducer>

export default store