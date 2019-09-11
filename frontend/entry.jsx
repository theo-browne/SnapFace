import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './root'
import { userInfo } from 'os'

document.addEventListener("DOMContentLoaded", () => {
    
    const root = document.getElementById("root")
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                // users: { [window.currentUser.id]: window.currentUser }
            },
            session: {
                id: window.currentUser.id, name: window.currentUser.name, profileUrl: currentUser.profileUrl || "https://image.flaticon.com/icons/svg/149/149452.sv" }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    
    ReactDOM.render(<Root store={store}/>, root)
})