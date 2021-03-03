import {SidebarType} from "./store";
import {ActionsTypes} from "./redux-store";

let initialState={}

function sidebarReducer(state:SidebarType=initialState,action:ActionsTypes){
    return state
}

export default sidebarReducer