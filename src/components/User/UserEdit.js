import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

export default function UserEdit() {

    const navigate = useNavigate();
    const [user, setUser] = useState({})
    const [firstName,setFirstName] = useState(user.firstName)
    const [lastName,setLastName] = useState(user.lastName)
    const [email,setEmail] = useState(user.email)
    const [status,setStatus] = useState(user.status)

   
    let { id } = useParams();
    
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.put("http://localhost:8004/api/Users/Update",
            {
                id:user.id,
                firstName: data.get('firstName'),
                lastName:data.get('lastName'),
                email:data.get('email'),
                passwordHash:user.passwordHash,
                passwordSalt:user.passwordSalt,
                status:data.get('status')
            })
            .catch(error => console.log(error))
        navigate("/UserList", { replace: true })

    };

   
    useEffect(() => {
        const loadAxios = async () => {
             
            
             await axios.get(`http://localhost:8004/api/Users/${id}`).then(response => setUser(response.data))
        }
      loadAxios();
    }, [id])
    
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Kullanıcı Güncelle
            </Typography>
            <Box component="form" method='post' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="Adı"
                            value={firstName || user.firstName}
                            fullWidth
                            onChange={e => setFirstName(e.target.value)}
                            
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Soyadı"
                            value={lastName || user.lastName}
                            fullWidth
                            onChange={e => setLastName(e.target.value)}
                            
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            value={email || user.email}
                            fullWidth
                            onChange={e => setEmail(e.target.value)}
                            
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="status"
                            name="status"
                            label="Durumu"
                            value={status || user.status}
                            fullWidth
                            onChange={e => setStatus(e.target.value)}
                            
                        />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Güncelle
                        </Button>
                    </Grid>

                </Grid>
            </Box>
              
            
        </React.Fragment>
    );
}


