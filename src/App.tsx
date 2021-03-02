import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import { StoreType} from "./Redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path={"/dialogs"}
                           render={() =>
                               <DialogsContainer
                                   store={props.store}
                                  />}/>
                    <Route exact path={"/profile"}
                           render={() =>
                               <Profile
                                   store={props.store}
                               />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
