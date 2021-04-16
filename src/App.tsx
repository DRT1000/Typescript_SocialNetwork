import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/headerContainer";
import Login from "./Components/Login/Login";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path={"/dialogs"}
                           render={() =>
                               <DialogsContainer/>
                           }/>
                    <Route exact path={"/profile/:userId?"}
                           render={() =>
                               <ProfileContainer/>}/>
                    <Route exact path={"/users"}
                           render={() => <UsersContainer/>}/>
                    <Route exact path={"/login"}
                           render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
//sefawg

export default App;
