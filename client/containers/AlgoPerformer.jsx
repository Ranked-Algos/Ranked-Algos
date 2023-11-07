import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Algo = () => {
    const auth = useSelector((state) => state.auth)

    const { usernameInput, passwordInput, isAuthenticated, user_id } = auth;

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated])

    return (
        <p> Algo </p>
    )

}

export default Algo