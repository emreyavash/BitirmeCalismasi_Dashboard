import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function CategoryAdd() {

    const navigate = useNavigate();
   
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post("http://localhost:8001/api/Category/AddCategory",
            {
                
                categoryName: data.get('categoryName'),
               
            })
            .catch(error => console.log(error))
        navigate("/Categories", { replace: true })

    };
    

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Kategori Ekle
            </Typography>
            <Box component="form" method='post' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                <Grid container alignItems={'center'} justifyContent={'center'} spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="categoryName"
                            name="categoryName"
                            label="Kategori Adı"
                            fullWidth
                            autoComplete="categoryName"
                            variant="standard"
                        />
                    </Grid>
                  
                    <Grid item xs={12} sm={4}>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Ekle
                        </Button>
                    </Grid>

                </Grid>
            </Box>
        </React.Fragment>
    );
}


