import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AlgoList = () => {
    const auth = useSelector((state) => state.auth)

    const { usernameInput, passwordInput, isAuthenticated, user_id } = auth;

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated])

    return(
        <p> Algo List</p>
    )
}

export default AlgoList