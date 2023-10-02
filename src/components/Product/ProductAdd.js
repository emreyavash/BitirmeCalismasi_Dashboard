import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState,useEffect } from 'react';

export default function ProductAdd() {

    const navigate = useNavigate();
    const [user,setUser]= useState({});
    const userInfo = JSON.parse(localStorage.getItem("user"))
    const getUser = async (email)=>{
       await axios.get(`http://localhost:8004/api/Users/GetUserByMail?email=${email}`).then(response=>{setUser(response.data)});
    }
    useEffect(()=>{
        axios.get(`http://localhost:8004/api/Users/GetUserByMail?email=${userInfo.email}`).then((response)=>{setUser(response.data)});
        
    },[userInfo.email])
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post("http://localhost:8000/api/Product/Add",
            {
                userId:user.id,
                productName: data.get('productName'),
                description: data.get('description'),
                imageFile: data.get('imageFile'),
                category: data.get('category'),
                price: data.get('price'),
                quantity: data.get('quantity')
            })
            .catch(error => console.log(error))
        navigate("/ProductList", { replace: true })

    };
    const [categoryList,setCategoryList] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8001/api/Category/getcategories").then(data=>setCategoryList(data.data));
        
     
       },[])
    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Ürün Ekle
            </Typography>
            <Box component="form" method='post' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="productName"
                            name="productName"
                            label="Ürün Adı"
                            fullWidth
                            autoComplete="productName"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            label="Açıklama"
                            fullWidth
                            autoComplete="description"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="imageFile"
                            name="imageFile"
                            label="Ürün Fotoğrafı"
                            fullWidth
                            autoComplete="imageFile"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="category-label">Kategori</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                name="category"
                                label="Kategori"
                                value={category}

                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>Ürün Seç</em>
                                </MenuItem>
                                {categoryList.map((category)=>(
                                <MenuItem key={category.id} value={category.categoryName}>{category.categoryName}</MenuItem>

                                ))}
                           
                            </Select>
                        </FormControl>
                        
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="price"
                            name="price"
                            label="Fiyat"
                            fullWidth
                            autoComplete="price"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="quantity"
                            name="quantity"
                            label="Adet"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

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


