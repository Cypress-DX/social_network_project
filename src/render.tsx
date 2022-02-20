import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Post} from "./Components/Profile/Posts/Post/Post";
import {addMessage, addPost, StateType, updateNewMessageText, updateNewPostText} from "./redux/state";


export const reRenderEntireTree=(state: StateType)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App
                profilePage={state.profilePage}
                messagesPage={state.messagesPage}
                sideBar={state.sideBar}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}




