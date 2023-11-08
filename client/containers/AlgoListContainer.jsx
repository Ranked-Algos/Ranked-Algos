import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AlgoList = () => {
    const auth = useSelector((state) => state.auth)

    const { usernameInput, passwordInput, isAuthenticated, user_id } = auth;

    useEffect(() => {
        
        // then
        if (isAuthenticated) {
            // let them in
        } else {
            // check cookie against db

            navigate('/')

        }
    }, [isAuthenticated])

    return(
        <div>

        <h1> Hello</h1>
        
        isAuthenticated ?
        <p> Algo List</p>
        :
        <p> Please wait </p>
        </div>
    )
}

export default AlgoList