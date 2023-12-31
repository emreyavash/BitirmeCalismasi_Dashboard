import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
    const [userInfo, setUserInfo] = useState({})
    const [errorMessage,setErrorMessage] = useState("")
    const navigate = useNavigate();
    const userArr = (email, isRegisterd) => (
        { email, isRegisterd }
    )

    const handleSubmit =  (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post("http://localhost:8004/api/Users/Login", { email: data.get('email'), password: data.get('password') })
            .then(response => {
                const user = userArr(response.data.email, response.data.isRegisterd)
                setUserInfo(user)
                localStorage.setItem("user", JSON.stringify(user))

                navigate("/ProductList", { replace: true })
                window.location.reload()

            })
            .catch(error => setErrorMessage(error.response.data))

    };

    
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
                        Giriş Yap
                    </Typography>
                    <Box component="form" method='post' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Parola"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Giriş Yap
                        </Button>
                       <Typography sx={{ color:"red" }}>{errorMessage}</Typography>
                        <Grid container>

                            <Grid item>
                                <Link to={"/kayit_ol"} variant="body2">
                                    {"Kayıt Ol"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}