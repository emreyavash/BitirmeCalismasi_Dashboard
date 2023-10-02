import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

import {  useContext } from 'react';
import axios from "axios"
import { Button } from '@mui/material';
import { ProductContext } from '../../Services/ProductService/ProductContext';

const Product = () => {
  const  {products}  = useContext(ProductContext)
  const navigate = useNavigate();

  

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/Product/delete?id=${id}`).then(() => {
      window.location.reload();
    })
  }

  return (
    <>

      {products.map((product) => (
        <TableRow
          key={product.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {product.productName}
          </TableCell>
          <TableCell align="right">{product.description}</TableCell>
          <TableCell align="right">{product.imageFile}</TableCell>
          <TableCell align="right">{product.category}</TableCell>
          <TableCell align="right">{product.price}</TableCell>
          <TableCell align="right">{product.quantity}</TableCell>
          <TableCell align="right"><Button variant="contained" color='warning' onClick={() => navigate(`/ProductEdit/${product.id}`)}>Güncelle</Button></TableCell>
          <TableCell align="right"><Button variant="contained" color='error' onClick={() => { deleteProduct(product.id) }} >Sil</Button></TableCell>

        </TableRow>
      ))}
    </>
  );
}

export default Product;