export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
type ActionsTypes = ReturnType<typeof sendMessageCreator>

export type InitialDialogsStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: "Helen"},
        {id: 2, name: "Nick"},
        {id: 3, name: "Sam"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Mike"},
        {id: 6, name: "Ron"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
    ] as Array<MessageType>
}

function dialogsReducer(state: InitialDialogsStateType = initialState, action: ActionsTypes): InitialDialogsStateType {

    switch (action.type) {
        case "SEND-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}]
            }
        default :
            return state
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({type: "SEND-MESSAGE", newMessageBody} as const)


export default dialogsReducer