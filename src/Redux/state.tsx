type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType={}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar:SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 15},
            {id: 2, message: "It's my props", likesCount: 5},
            {id: 3, message: "Bla-bla", likesCount: 7},
            {id: 4, message: "Yo", likesCount: 3}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Helen"},
            {id: 2, name: "Nick"},
            {id: 3, name: "Sam"},
            {id: 4, name: "Viktor"},
            {id: 5, name: "Mike"},
            {id: 6, name: "Ron"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Yo"}
        ]
    },
    sidebar:{}
}

export default state


