import React from "react";
import Login from "../containers/LoginContainer";
import Signup from "../containers/SignupContainer";
import {useSelector, useDispatch} from "react-redux";
import { Box, Tabs, Tab, Grid, Button, Stack, Fab, Typography, CircularProgress, Tooltip, Paper, Alert } from '@mui/material';
import { signupPage, loginPage } from "../redux/features/AuthData/HomeSlice";

const HomePage = () => {
    const auth = useSelector((state) => state.auth);
    const { usernameInput, passwordInput, user_id} = auth;
    const home = useSelector((state) => state.home)
    const { signup } = home;
    const dispatch = useDispatch()

    const loginDispatch = () => {
        dispatch(loginPage())
    }

    const signupDispatch = () => {
        dispatch(signupPage())
    }

    return (
        <Box id="home-page">
            <Paper justifyContent={'center'}>
                <Tabs>
                    <Tab onClick={loginDispatch} label="Login">  </Tab>
                    <Tab onClick={signupDispatch} label="Signup" >  </Tab>
                </Tabs>

                {(signup === 1) ? 
                    <Stack>
                        <Typography> Signup </Typography>
                        <Signup/>
                    </Stack>
                    : 
                    <Stack justifyContent={'center'}> 
                        <Typography> Login</Typography> 
                        <Login/> 
                    </Stack>
                }
            </Paper>
        </Box>
    )
}

export default HomePage;