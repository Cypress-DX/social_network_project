export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer:(p: any) => void) => void
    addMessage: () => void
    updateNewMessageText: (newMessage: string) => void
}

let store: StoreType = {
    _state: {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you????", likes: 4},
            {id: 2, message: "It is my second post", likes: 3},
            {id: 3, message: "I am learning React in IT Inkubator", likes: 0},
        ],
        newPostData: ''
    },
    messagesPage: {
        messages: [
            {message: "Hello"},
            {message: "How are you doing?"},
            {message: "I live in Kotlas"}
        ],
        dialogs: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Alex"},
            {id: 3, name: "NickJagger"},
            {id: 3, name: "Sasha"},
            {id: 3, name: "Mauzer"},
        ],
        newMessageText: ''
    },
    sideBar: {
        friends: [
            {id: 1, name: "Irishka", status: "love"},
            {id: 2, name: "Edik", status: "helper"},
            {id: 3, name: "Maksim", status: "adviser"},
        ]
    }
},
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log("state changed")
    },
    addPost () {
        // debugger;
        console.log(this.getState())
        let newPost: PostsType = {
            id: 4,
            message: this._state.profilePage.newPostData,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostData = newText
       this._callSubscriber(this._state)
    },
    addMessage () {
    const newMessage: MessagesType = {
        message: this._state.messagesPage.newMessageText
    }
    this._state.messagesPage.messages.push(newMessage)
        this._callSubscriber(this._state)
},
    updateNewMessageText (newMessage: string) {
    this._state.messagesPage.newMessageText = newMessage
        this._callSubscriber(this._state)
},
    subscribe (observer: (p: any) => void) {
        this._callSubscriber = observer
    }
}

// let _callSubscriber = () => {
//     console.log("state changed")
// }

// const state: StateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi, how are you????", likes: 4},
//             {id: 2, message: "It is my second post", likes: 3},
//             {id: 3, message: "I am learning React in IT Inkubator", likes: 0},
//         ],
//         newPostData: ''
//     },
//     messagesPage: {
//         messages: [
//             {message: "Hello"},
//             {message: "How are you doing?"},
//             {message: "I live in Kotlas"}
//         ],
//         dialogs: [
//             {id: 1, name: "Dima"},
//             {id: 2, name: "Alex"},
//             {id: 3, name: "NickJagger"},
//             {id: 3, name: "Sasha"},
//             {id: 3, name: "Mauzer"},
//         ],
//         newMessageText: ''
//     },
//     sideBar: {
//         friends: [
//             {id: 1, name: "Irishka", status: "love"},
//             {id: 2, name: "Edik", status: "helper"},
//             {id: 3, name: "Maksim", status: "adviser"},
//         ]
//     }
// }

export type PostsType = {
    id: number
    message: string
    likes: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostData: string
}
export type MessagesType = {
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
export type FriendsType = {
    id?: number
    name: string
    status?: string
}
export type SideBarType = {
    friends: Array<FriendsType>
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sideBar: SideBarType
}
export type AppType = {
    // profilePage: ProfilePageType
    // messagesPage: MessagesPageType
    // sideBar: SideBarType
    state: StateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostData: string) => void
    addMessage: (messageText: string) => void
    updateNewMessageText: (newMessage: string) => void
}

// export const addPost = () => {
//     // debugger;
//     let newPost: PostsType = {
//         id: 4,
//         message: state.profilePage.newPostData,
//         likes: 0
//     }
//     state.profilePage.posts.push(newPost)
//     reRenderEntireTree()
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostData = newText
//     reRenderEntireTree()
// }
// export const addMessage = () => {
//     const newMessage: MessagesType = {
//         message: state.messagesPage.newMessageText
//     }
//     state.messagesPage.messages.push(newMessage)
//     reRenderEntireTree()
// }
// export const updateNewMessageText = (newMessage: string) => {
//     state.messagesPage.newMessageText = newMessage
//     reRenderEntireTree()
// }
// export const subscribe = (observer: () => void) => {
//     reRenderEntireTree = observer
// }

export default store;

