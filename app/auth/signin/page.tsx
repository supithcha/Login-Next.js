"use client"
import React, { useRef } from "react";
import { signIn } from "next-auth/react";

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



export default function Page() {
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleLogin = () => {
        signIn("credentials", {
            username: username.current?.value,
            password: password.current?.value,
            redirect: true, // Changed redirect to false to prevent automatic redirection
            callbackUrl: "/", // Changed callbackUrl to "/" for simplicity
        });
    };

    return (
        <Container component="main" maxWidth="xs">
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
            Login
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              inputRef={username}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              inputRef={password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Box>
          <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
                {/* <label>
                    Username
                    <input name='username' type='text' ref={username} />
                </label>
                <label>
                    Password
                    <input name='password' type='password' ref={password} />
                </label>
                <button type='button' onClick={handleLogin}> Login</button> */}
            </Box>
        </Container>
    )
}