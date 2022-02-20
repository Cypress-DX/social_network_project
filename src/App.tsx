import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {AppType, StateType, updateNewPostText} from "./redux/state";


const App = (props: AppType) => {
    const messagesPage = props.messagesPage
    const postPage = props.profilePage
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar
               friends={props.sideBar.friends}
                />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Dialogs/*' element={<Dialogs
                            dialogs={messagesPage.dialogs}
                            messages={messagesPage.messages}
                            addMessage={props.addMessage}
                            updateNewMessageText={props.updateNewMessageText}
                            newMessageText={messagesPage.newMessageText}

                        />}/>
                        <Route path='/Profile' element={<Profile
                            posts={postPage.posts}
                            newPostData={postPage.newPostData}
                            addPost={props.addPost}
                            updateNewPostText={updateNewPostText}
                        />}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
