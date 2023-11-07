import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from './App.jsx';
import './styles.scss';
import store from "./redux/Store.jsx";
import RouterErrorPage from "./router/RouterErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <RouterErrorPage/>,
    }
])


const root = createRoot(document.getElementById("root"));

root.render(

    // <Provider store = {store}>
    <div>
        <RouterProvider router={router} />
    </div>
    // </Provider>
 )
