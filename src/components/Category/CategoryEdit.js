import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

export default function CategoryEdit() {

    const navigate = useNavigate();
    const [category, setCategory] = useState({})
    const [categoryName,setCategoryName] = useState(category.productName)
   
    let { id } = useParams();
    
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.put("http://localhost:8001/api/Category/UpdateCategory",
            {
                id:category.id,
                categoryName: data.get('categoryName'),
              
            })
            .catch(error => console.log(error))
        navigate("/Categories", { replace: true })

    };

   
    useEffect(() => {
        const loadAxios = async () => {
             
            
             await axios.get(`http://localhost:8001/api/Category/GetCategoryById?id=${id}`).then(response => setCategory(response.data))
        }
      loadAxios();

    }, [id])
    
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Ürün Güncelle
            </Typography>
            <Box component="form" method='post' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="categoryName"
                            name="categoryName"
                            label="Kategori Adı"
                            value={categoryName || category.categoryName}
                            fullWidth
                            onChange={e => setCategoryName(e.target.value)}
                            
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


