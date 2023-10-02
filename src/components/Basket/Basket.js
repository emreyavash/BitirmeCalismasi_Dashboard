import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Button, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const Basket = () => {

    const [secondary, setSecondary] = React.useState(true);
    const [user, setUser] = useState({});
    const userInfo = JSON.parse(localStorage.getItem("user"))
    const [baskets, setBasket] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8004/api/Users/GetUserByMail?email=${userInfo.email}`).then((response) => { setUser(response.data) }).catch(err=>console.log(err));
    }, [userInfo])
    useEffect(() => {
        axios.get(`http://localhost:8005/api/Baskets/BasketByUserId?userId=${user.id}`).then((res) => { setBasket(res.data.baskets) }).catch(err=>console.log(err))

    }, [user.id])
    
    const completeBasket =()=>{
        axios.post(`http://localhost:8005/api/Baskets/CompleteBasket?userId=${user.id}`)
        navigate("/Siparislerim")
    }
    return (
        <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Sepet
            </Typography>
            <Demo>
                <List  >
                    {baskets.map(x=>(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary= {x.productName}
                    secondary={secondary ? 'Ürün Adı' : null}
                  />
                   <ListItemText
                    primary= {x.totalPrice/x.unitPrice}
                    secondary={secondary ? 'Adet' : null}
                  />
                   <ListItemText
                    primary= {x.totalPrice}
                    secondary={secondary ? 'Toplam Fiyat' : null}
                  />
                </ListItem>
             ))}
             {baskets.length >0 ?<Button  sx={{mt:13}} variant='contained' onClick={()=>{completeBasket()}}>Ödeme Yap</Button>:null}
                
                </List>
            </Demo>
        </Grid>
    )
}
export default Basket;