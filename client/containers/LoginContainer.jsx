
import {useSelector, useDispatch} from "react-redux";
import {updateUsername, updatePassword, givePermission, removePermission, setID, clearID} from '../redux/features/AuthData/AuthSlice'
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Login = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const defaultTheme = createTheme();
    const handleUsernameChange = (e) => {
       
        dispatch(updateUsername(e.target.value))
    };

    const handlePasswordChange = (e) => {
        
        dispatch(updatePassword(e.target.value))
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // fake login process for testing
        // const fakeUsername = 'tarik'
        // const fakePassword = 'supreme'

        // if (auth.usernameInput === fakeUsername && auth.passwordInput === fakePassword) {
        //     dispatch(givePermission())
        //     dispatch(setID(14))
        // } else {
        //     dispatch(removePermission())
        //     dispatch(clearID())
        // }
        console.log(data.get('username'));
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: data.get('username'), password: data.get('password')})
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if (data.user_id){
                dispatch(givePermission())
                dispatch(setID(data.user_id))
                navigate('/algo')
            }
            
        })
        .catch((error) => console.log('in catch block. the error is', error))


    }

    return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleLoginClick} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      );
}

export default Login;