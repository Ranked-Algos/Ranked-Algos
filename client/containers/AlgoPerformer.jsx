import React, { useEffect, useSelector } from "react";
import { useNavigate } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';


const Algo = () => {
    const auth = useSelector((state) => state.auth)

    const { usernameInput, passwordInput, isAuthenticated, user_id } = auth;

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate('/')
    //     }
    // }, [isAuthenticated])

    return (
        <p> Algo </p>
    )

}

export default Algo