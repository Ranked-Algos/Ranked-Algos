import React from "react";
import { Box, Chip, Grid, Button, Stack, Fab, Typography, CircularProgress, Tooltip, Paper } from '@mui/material';
import {useSelector, useDispatch} from "react-redux";
import {updateUsername, updatePassword, givePermission, removePermission} from '../redux/features/authData/authSlice.js'


const Login = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    
    const handleUsernameChange = (e) => {
       
        dispatch(updateUsername(e.target.value))
    };

    const handlePasswordChange = (e) => {
        
        dispatch(updatePassword(e.target.value))
    };

    const handleLoginClick = () => {

        // fake login process for testing
        const fakeUsername = 'tarik'
        const fakePassword = 'supreme'

        if (auth.usernameInput === fakeUsername && auth.passwordInput === fakePassword) {
            dispatch(givePermission())
        } else {
            dispatch(removePermission())
        }

    }

    

    return (
        <Box>
            Username: <input className = 'input' onChange = {handleUsernameChange} value = {auth.usernameInput}/>
            Password: <input className = 'input' onChange = {handlePasswordChange} value = {auth.paswordInput}/>
            <button type="button" onClick={handleLoginClick}>Login</button>
            <p> {'auth boolean is ' + auth.isAuthenticated} </p>
        </Box>
    )
}

export default Login;