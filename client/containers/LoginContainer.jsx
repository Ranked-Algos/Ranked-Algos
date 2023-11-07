import React from "react";
import { Box, Chip, Grid, Button, Stack, Fab, Typography, CircularProgress, Tooltip, Paper } from '@mui/material';
import { Outlet } from "react-router-dom";import {useSelector, useDispatch} from "react-redux";
import {updateUsername, updatePassword, givePermission, removePermission, setID, clearID} from '../redux/features/authData/authSlice.js'


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
            dispatch(setID(14))
        } else {
            dispatch(removePermission())
            dispatch(clearID())
        }

    }

    

    return (
        <Box>
            Username: <input className = 'input' onChange = {handleUsernameChange} value = {auth.usernameInput}/>
            Password: <input className = 'input' onChange = {handlePasswordChange} value = {auth.paswordInput}/>
            <button type="button" onClick={handleLoginClick}>Login</button>
            <p> {'TEST: auth boolean is ' + auth.isAuthenticated} </p>
            <p> {'TEST: user_ID is ' + auth.user_id} </p>
        </Box>
    )
}

export default Login;