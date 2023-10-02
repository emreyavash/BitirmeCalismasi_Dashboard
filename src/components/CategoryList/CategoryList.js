import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import Paper from '@mui/material/Paper';
import Category from '../Category/Category';
import CategoryContextProvider from '../../Services/CategoryService/CategoryContext';
import { Link } from 'react-router-dom';


export default function CategoryList() {

  return (
    <CategoryContextProvider>
    <TableContainer component={Paper}>
    <Link to={"/Category_Add"}>Kategori Ekle</Link>
      <Table sx={{ minWidth: 650 ,alignItems:'center',justifyContent:'center'}}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Kategori Adı</TableCell>
            <TableCell align="center">Güncelle</TableCell>
            <TableCell align="center">Sil</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        <Category/>
        </TableBody>
      </Table>
    </TableContainer>
    </CategoryContextProvider>
  );
}
