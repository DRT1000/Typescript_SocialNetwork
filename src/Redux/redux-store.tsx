import {createStore, combineReducers} from "redux"
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer"


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store