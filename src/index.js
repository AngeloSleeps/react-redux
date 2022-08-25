import React from "react";
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>

        </Provider>
    </React.StrictMode>
);