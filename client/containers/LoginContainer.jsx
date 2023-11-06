import React from "react";
import { Box, Chip, Grid, Button, Stack, Fab, Typography, CircularProgress, Tooltip, Paper } from '@mui/material';


const Login = () => {
    const formOnChange = (e) => {
        e.preventDefault();
        // CALL REDUCER AND UPDATE STATE HERE
    };

    const formOnSubmit = async (e) => {
        await e.preventDefault();
    };

    return (
        <Box>
            <form onSubmit={formOnSubmit} onChange={formOnChange}>
                <input type="text"></input>
                <input type="password"></input>
                <Button type="submit"> Login </Button>
            </form>
        </Box>
    )
}

export default Login;