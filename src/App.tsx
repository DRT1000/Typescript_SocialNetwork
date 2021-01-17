import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state from "./Redux/state";

function App() {
    let dialogs = state.dialogsPage
    let posts = state.profilePage
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route exact path={"/dialogs"}
                           render={() => <Dialogs dialogs={dialogs.dialogs} messages={dialogs.messages}/>}/>
                    <Route exact path={"/profile"} render={() => <Profile posts={posts.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;
