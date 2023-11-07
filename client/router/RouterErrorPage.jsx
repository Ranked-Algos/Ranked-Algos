import React from "react";
import { useRouteError } from "react-router-dom";
import { Box, Chip, Grid, Button, Stack, Fab, Typography, CircularProgress, Tooltip, Paper } from '@mui/material';

const ErrorPage = () => {
    const err = useRouteError();
    console.error(err);

    return (
        <Box id="error-page">
            <h1>  An Error has Occured: </h1>
            <i> {err.statusText || err.message} </i>
        </Box>
    );
};

export default ErrorPage 
