import React from "react";
import {InitialDialogsStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

type MapStatePropsType = {
    dialogsPage: InitialDialogsStateType
}
type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        dialogsPage: state.dialogsPage,
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

// const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)