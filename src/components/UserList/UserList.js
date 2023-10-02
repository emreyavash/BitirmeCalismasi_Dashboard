import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import Paper from '@mui/material/Paper';
import UserContextProvider from '../../Services/UserService/UserContext';
import User from '../User/User';


export default function UserList() {

  return (
    <UserContextProvider>
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Adı</TableCell>
            <TableCell align="center">Soyadı </TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Güncelle</TableCell>
            <TableCell align="right">Sil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <User/>
        </TableBody>
      </Table>
    </TableContainer>
    </UserContextProvider>
  );
}
