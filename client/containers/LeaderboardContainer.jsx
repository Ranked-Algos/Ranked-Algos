import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
    const auth = useSelector((state) => state.auth)

    const { usernameInput, passwordInput, isAuthenticated, user_id } = auth;
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            fetch('http://localhost:3000/auth/cookie')
            .then ((res) => res.json())
            .then((data) => {
                if (!data) {
                    navigate('/')
                }
            })
        }
    }, [isAuthenticated])

    return(
        'hello'
    ) 

}

export default Leaderboard