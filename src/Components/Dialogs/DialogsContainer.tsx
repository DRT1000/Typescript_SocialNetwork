import React from "react";
import {InitialDialogsStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    dialogsPage: InitialDialogsStateType
    isAuth: boolean
}
type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchPropsType {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer