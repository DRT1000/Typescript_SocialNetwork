import React, {ChangeEvent} from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {
    ActionsTypes,
    DialogPageType,
    DialogType,
    MessageType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../Redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageTextBody: string
    dispatch: (action: ActionsTypes) => void
}

function Dialogs(props: DialogsPropsType) {

    let dialogElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m) => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.newMessageTextBody
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={"Enter your message"}> </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs