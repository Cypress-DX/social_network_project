import React from 'react';
import './App.css';





const App = () => {
    return (
        <div className='app-wrapper'>
            <header className="header">
                <img src="https://lh3.googleusercontent.com/proxy/xfAdf_QKjdhuT_QLA60YiWHD6JZCM7rjLBON9HmUTlXqb4Y0X58e3GYE1riO2atE_scHOhgv6nN56KBxhWQH1KonA_7O50RH3VF-AHrv3AYLPQ"/>
            </header>
            <nav className="nav">
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
                <div>
                    Settings
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://thumbs.dreamstime.com/z/cyclists-bike-race-banner-style-colorful-illustration-bunch-taking-part-white-background-56476672.jpg"/>
                </div>
                <div>
                    My posts
                    <div>
                        New Posts
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                        <div>
                            Post 3
                        </div>
                    </div>
                </div>
            </div>

        </div>
)
}

export default App;
