import {combineReducers, createStore} from "redux"
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./DialogsReducer";
import profileReducer, {addPostActionCreator, updateNewPostActionCreator} from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer"
import usersReducer from "./Users-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer
})

let store = createStore(rootReducer);
export type AppStateType = ReturnType<typeof rootReducer>

export default store