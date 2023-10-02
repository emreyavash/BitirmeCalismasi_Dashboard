import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState, useEffect } from 'react';

export default function ProductEdit() {

    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const [productName, setProductName] = useState(product.productName)
    const [description, setDescription] = useState(product.description)
    const [imageFile, setImageFile] = useState(product.imageFile)
    const [category, setCategory] = useState(product.category)
    const [price, setPrice] = useState(product.price)
    const [quantity, setQuantity] = useState(product.quantity)


    useEffect(() => {
        axios.get("http://localhost:8001/api/Category/getcategories").then(data => setCategoryList(data.data));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.put("http://localhost:8000/api/Product/update",
            {
                id: product.id,
                productName: data.get('productName'),
                description: data.get('description'),
                imageFile: data.get('imageFile'),
                category: data.get('category'),
                price: data.get('price'),
                quantity: data.get('quantity'),
                userId: product.userId
            })
            .catch(error => console.log(error))
      navigate("/ProductList", { replace: true })

    };
    const [categoryList, setCategoryList] = useState([])
    let { id } = useParams();
    useEffect(() => {
        const loadAxios = async () => {


            await axios.get(`http://localhost:8000/api/Product/${id}`).then(response => setProduct(response.data))
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
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="productName"
                            name="productName"
                            value={productName || product.productName}
                            fullWidth
                            autoComplete="off"
                            onChange={e => setProductName(e.target.value)}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="description"
                            name="description"
                            value={description || product.description}
                            onChange={e => setDescription(e.target.value)}

                            fullWidth
                            autoComplete="description"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="imageFile"
                            name="imageFile"
                            fullWidth
                            autoComplete="imageFile"
                            value={imageFile || product.imageFile}
                            onChange={e => setImageFile(e.target.value)}

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
                                value={category || product.category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>Ürün Seç</em>
                                </MenuItem>

                                {categoryList.map((x) => (

                            
                                        <MenuItem key={x.id} value={x.categoryName}>{x.categoryName}</MenuItem>
                                    
                                    ) )}

                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="price"
                            name="price"
                            fullWidth
                            autoComplete="price"
                            value={price || product.price}
                            onChange={e => setPrice(e.target.value)}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="quantity"
                            name="quantity"
                            fullWidth
                            value={quantity || product.quantity}
                            onChange={e => setQuantity(e.target.value)}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => console.log(product)}
                        >
                            Güncelle
                        </Button>
                    </Grid>

                </Grid>
            </Box>


        </React.Fragment>
    );
}


