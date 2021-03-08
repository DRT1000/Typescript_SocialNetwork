import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path={"/dialogs"}
                           render={() =>
                               <DialogsContainer/>
                           }/>
                    <Route exact path={"/profile"}
                           render={() =>
                               <Profile/>}/>
                    <Route exact path={"/users"}
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
