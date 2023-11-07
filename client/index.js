import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import './styles.scss';
import store from "./redux/Store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterErrorPage from "./router/RouterErrorPage.jsx";
import Login from "./containers/LoginContainer.jsx";
import Profile from "./containers/ProfileContainer.jsx";
import Leaderboard from "./containers/LeaderboardContainer.jsx";
import Algo from "./containers/AlgoPerformer.jsx";
import AlgoList from "./containers/AlgoListContainer.jsx";
import AuthProvider from "./router/AuthProvider.jsx";

const bool = true;

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>,
        errorElement: <RouterErrorPage/>,
        children: [
            {
                path: "/profile",
                element: <Profile/>,
            },
        ]
    },
    
    {
        path: '/leaderboard',
        element: bool ? <Leaderboard/> : <p> Login Bozo</p>,
        errorElement: <RouterErrorPage/>,
    },
    {
        path: '/Algo',
        element: <Algo/>,
        errorElement: <RouterErrorPage/>,
    },
    {
        path: '/AlgoList',
        element: <AlgoList/>,
        errorElement: <RouterErrorPage/>,
    },
])


const root = createRoot(document.getElementById("root"));

root.render(
    // <Provider store = {store}>
        <RouterProvider router={router} />
    // </Provider>
 )
