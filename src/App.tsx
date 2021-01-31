import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, ProfilePageType, RootStateType} from "./Redux/state";
import {type} from "os";

type AppPropsType = {
    state: RootStateType
    dispatch:(action: ActionsTypes) => void
}

function App(props: AppPropsType) {
    // let dialogs = state.dialogsPage
    // let posts = state.profilePage
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path={"/dialogs"}
                           render={() =>
                               <Dialogs
                                   dialogs={props.state.dialogsPage.dialogs}
                                   messages={props.state.dialogsPage.messages}/>}/>
                    <Route exact path={"/profile"}
                           render={() =>
                               <Profile
                                   profilePage={props.state.profilePage}
                                   dispatch={props.dispatch}
                               />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
