import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import Chat from './containers/Chat';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';
import {
    createHashRouter,
    RouterProvider
} from 'react-router-dom';

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
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    );


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
