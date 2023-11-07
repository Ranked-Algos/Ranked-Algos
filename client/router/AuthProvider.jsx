import React from "react";
import Login from "../containers/LoginContainer.jsx";
import Profile from "../containers/ProfileContainer.jsx";

const AuthProvider = () => {
    let bool = false;

    return (
        bool ? Login  : Profile
    )
};

export default AuthProvider;