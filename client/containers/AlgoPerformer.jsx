import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Chip, Grid, Button, Stack, Fab, Typography, CircularProgress, Tooltip, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { updateCodeText, resetTime, updateTime, start, stop } from "../redux/features/AuthData/CodeSlice";

const Algo = () => {
    const dispatch = useDispatch()
    let auth = useSelector((state) => state.auth)
    const { usernameInput, passwordInput, isAuthenticated, user_id } = auth;
    const { codeText, time, running } = useSelector((state) => state.code)
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
    const onSubmitHandleClick = (e) => {
        fetchRequest('/code', { method: "POST" }, { codeText: codeText, time: time, user_id: user_id })
    }
    
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
    
    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {
                dispatch(updateTime())
            }, 1000)
        } else if (!running) {
            clearInterval(timer)
        }
        return () => clearInterval(timer)
    }, [running])

    return (
        <Box>
            <Stack>
                <Typography> Time: {time} </Typography>
                <Typography> Running: {running} </Typography>
            </Stack>
            <Button onClick={() => dispatch(start())}> Start</Button>
            <Button onClick={() => dispatch(stop())}> Stop</Button>
            <Button onClick={() => dispatch(resetTime())}> Reset</Button>
            {running ? <CodeMirror extensions={[javascript({ jsx: true })]} onChange={(e) => dispatch(updateCodeText(e))} />
                : <p>Press Start to Begin</p>}
            <Button onClick={onSubmitHandleClick}> Submit </Button>
        </Box>
    )
}

export default Algo