import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Components/Login/Login";
import Users from "./Components/Users/Users";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path={"/profile/:id?"}
                               render={() => <Profile/>}/>
                        <Route exact path={"/dialogs"}
                               render={() => <Dialogs/>}/>
                        <Route exact path={"/users"}
                               render={() => <Users/>}/>
                        <Route exact path={"/login"}
                               render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

//sefawg

export default App;
