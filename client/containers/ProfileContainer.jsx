import React, { useEffect } from "react";
import { Box, Chip, Grid, Button, Stack, Fab, Typography, CircularProgress, Tooltip, Paper } from '@mui/material';
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const auth = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const { usernameInput, passwordInput, isAuthenticated, user_id } = auth;

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

    return (
        <Box>
            Hello
        </Box>
    )
};

export default Profile;