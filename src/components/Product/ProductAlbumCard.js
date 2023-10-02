import {  TextField } from "@mui/material";
import { ProductContext } from "../../Services/ProductService/ProductContext";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const ProductAlbumCard = () => {

    const { products } = useContext(ProductContext)
    const [user, setUser] = useState({});
    let [quantity, setQuantity] = useState(1);
    const userInfo = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        axios.get(`http://localhost:8004/api/Users/GetUserByMail?email=${userInfo.email}`).then((response) => { setUser(response.data) });
    })
    const AddBasket = (productId, productName,unitprice) => {
        axios.post(`http://localhost:8005/api/Baskets/AddItem?userId=${user.id}`, {
            id:uuidv4(),
            productId: productId,
            productName:productName,
            orderComplete: false,
            totalprice: unitprice*quantity,
            unitprice: unitprice,
        })
    }
   
    return (
        <>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardMedia
                            component="div"
                            sx={{
                                // 16:9
                                pt: '56.25%',
                            }}
                            image={product.imageFile}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.productName}
                            </Typography>
                            <Typography>
                                {product.description.length < 100 ? product.description : product.description.substring(0, 150) + "..."}
                            </Typography>
                            <Typography variant="h6" sx={{ pt: 3 }} >
                                {product.price} ₺
                            </Typography>
                        </CardContent>
                        <CardActions>
                        <TextField 
                        id="quantity" 
                        name="quantity" 
                        label="Adet" 
                        variant="outlined" 
                        onChange={(e)=>setQuantity(e.target.value)}
                        />

                        </CardActions>
                        <CardActions>
                            <Button size="small" variant="contained" onClick={() => { AddBasket(product.id, product.productName,product.price) }}>Sepete Ekle</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </>
    )
}

export default ProductAlbumCard;