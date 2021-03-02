import React from "react";
import { StoreType} from "../../Redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store:StoreType
}

function DialogsContainer(props: DialogsPropsType) {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return <Dialogs dialogsPage={state}
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}/>
}


export default DialogsContainer