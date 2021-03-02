import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store, {RootStateType} from "./Redux/store";


export let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
    let state=store.getState()
    rerenderEntireTree(state)
})

