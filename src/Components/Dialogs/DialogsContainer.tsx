import React from "react";
import {InitialDialogsStateType, sendMessageCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

type MapStatePropsType = {
    dialogsPage: InitialDialogsStateType
}
type MapDispatchPropsType = {
    sendMessage: (value:string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        dialogsPage: state.dialogsPage,
    }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchPropsType {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

// const DialogsContainer = WithAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)