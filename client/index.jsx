import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider, useSelector } from "react-redux";

import './styles.scss';

import Store from './redux/Store'
import RouterErrorPage from "./router/RouterErrorPage.jsx";
import Login from "./containers/LoginContainer.jsx";
import Profile from "./containers/ProfileContainer.jsx";
import Leaderboard from "./containers/LeaderboardContainer.jsx";
import Algo from "./containers/AlgoPerformer.jsx";
import AlgoList from "./containers/AlgoListContainer.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>,
        errorElement: <RouterErrorPage/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
        errorElement: <RouterErrorPage/>,
    },
    {
        path: '/leaderboard',
        element: <Leaderboard/>,
        errorElement: <RouterErrorPage/>,
    },
    {
        path: '/Algo',
        element: <Algo/>,
        errorElement: <RouterErrorPage/>,
    },
    {
        path: '/AlgoList',
        element:<AlgoList/>,
        errorElement: <RouterErrorPage/>,
    },
])

const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store = {Store}>
        <RouterProvider router={router} />
    </Provider>
 )
