import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {DialogPageType} from "../../Redux/store";

type DialogsPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    dialogsPage: DialogPageType
}

function Dialogs(props: DialogsPropsType) {

    let state = props.dialogsPage
    let dialogElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} id={m.id}/>)

    let newMessageBody = state.newMessageTextBody
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
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