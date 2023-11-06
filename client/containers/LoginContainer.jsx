import React from "react";
import { Box, Chip, Grid, Button, Stack, Fab, Typography, CircularProgress, Tooltip, Paper } from '@mui/material';


const Login = () => {
    const formOnChange = (e) => {
        e.preventDefault();
        // CALL REDUCER AND UPDATE STATE HERE
    }

    return (
        <Box>
            <form onChange={formOnChange}>
                <input type="text"></input>
                <input type="password"></input>
                <Button type="submit"> Login </Button>
            </form>
        </Box>
    )
}

export default Login;