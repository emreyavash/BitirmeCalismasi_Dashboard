import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import Paper from '@mui/material/Paper';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import ProductContextProvider from '../../Services/ProductService/ProductContext';


export default function ProductList() {

  return (
    <ProductContextProvider>
    <TableContainer component={Paper}>
      
    <Link to={"/Product_add"}>Ürün Ekle</Link>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ürün Adı</TableCell>
            <TableCell align="center">Açıklama</TableCell>
            <TableCell align="right">Ürün Fotoğrafı</TableCell>
            <TableCell align="right">Kategori</TableCell>
            <TableCell align="right">Fiyat</TableCell>
            <TableCell align="right">Adet</TableCell>
            <TableCell align="right">Güncelle</TableCell>
            <TableCell align="right">Sil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <Product/>
        </TableBody>
      </Table>
    </TableContainer>
    </ProductContextProvider>
  );
}
