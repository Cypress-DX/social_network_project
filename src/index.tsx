import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, subscribe} from "./redux/state";

import reportWebVitals from './reportWebVitals';
import {Post} from "./Components/Profile/Posts/Post/Post";
import {addMessage, StateType, updateNewMessageText, updateNewPostText} from "./redux/state";


const reRenderEntireTree=()=>{
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

reRenderEntireTree()

subscribe(reRenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
