import React from "react";
import { Box, Chip, Grid, Button, Stack, Fab, Typography, CircularProgress, Tooltip, Paper } from '@mui/material';
import {useSelector, useDispatch} from "react-redux";
import {updateUsername, updatePassword, givePermission, removePermission, setID, clearID} from '../redux/features/AuthData/AuthSlice'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const auth = useSelector((state) => state.auth);
    const { usernameInput, passwordInput, user_id} = auth;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fetchRequest = async (endpoint, method, card) => {
        // If no "method" is passed, it uses this default header
        let defaultHeader = {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(card)
          };
        // If a method is is passed, it updates the default header
        let header = Object.assign({}, defaultHeader, method);
        
        const result = await fetch(`${endpoint}`, header)
        .then((data) => data.json())
        // .then((data) => console.log('DATA', data))
          .catch((err) => console.error(err))
        return result;
    }

    const handleUsernameChange = (e) => {
        dispatch(updateUsername(e.target.value))
    }

    const handlePasswordChange = (e) => {
        dispatch(updatePassword(e.target.value))
    }

    const handleLoginSubmit = async (e) => {
        await e.preventDefault()

        const returnedData = await fetchRequest('http://localhost:3000/auth/signup', {method: "POST"}, {username: usernameInput, password: passwordInput})
        await console.log('returnedData', returnedData)
        if (returnedData) {
            const {} = returnedData
        }
    }

    return (
        <Box>
            <form onSubmit={handleLoginSubmit}>
                Username: <input onChange={handleUsernameChange} type="text"/>
                Password: <input onChange={handlePasswordChange} type="password"/>
                <Button type="submit"> Signup </Button>
            </form>
        </Box>
    )
}

export default Signup