import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import { createStoreHook, Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import './index.css';
import App from './containers/App';
import Chat from './containers/Chat';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';
import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom';

import { searchKittens, requestKittens } from "./reducers"

const logger = createLogger();
const rootReducer = combineReducers({ searchKittens, requestKittens })
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const router = createHashRouter([
    {
        path: '/*',
        element: <App />,
    },
    {
        path: '/chat', // com/#/chat
        element: <Chat />,
    }
])

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    ); 
  
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
