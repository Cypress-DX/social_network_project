let reRenderEntireTree = () => {
    console.log("state changed")
}


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
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sideBar: SideBarType
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostData: string) => void
    addMessage: (messageText: string) => void
    updateNewMessageText: (newMessage: string) => void
}
const state: StateType = {
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
}
export const addPost = () => {
    // debugger;
    let newPost: PostsType = {
        id: 4,
        message: state.profilePage.newPostData,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    reRenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostData = newText
    reRenderEntireTree()
}

export const addMessage = () => {
    const newMessage: MessagesType = {
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.messages.push(newMessage)
    reRenderEntireTree()
}

export const updateNewMessageText = (newMessage: string) => {
    state.messagesPage.newMessageText = newMessage
    reRenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    reRenderEntireTree = observer
}

export default state;

