import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";



function mapStateToProps(state: AppStateType) {
    return {
        dialogsPage: state.dialogsPage
    }
}

function mapDispatchToProps(dispatch:any) {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer