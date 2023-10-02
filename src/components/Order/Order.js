import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState,useEffect } from 'react';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Order() {
    const [orders,setOrders]=useState([])
    const [user, setUser] = useState({});
    const userInfo = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        axios.get(`http://localhost:8004/api/Users/GetUserByMail?email=${userInfo.email}`).then((response) => { setUser(response.data) }).catch(err=>console.log(err))
    }, [userInfo])
   useEffect(()=>{
        axios.get(`http://localhost:8003/api/Orders/GetOrdersByUserName/${user.id}`).then((res)=>setOrders(res.data)).catch(err=>console.log(err))
    },[user.id])
  return (
    <TableContainer component={Paper} sx={{ minWidth: 650,maxWidth: "80%",alignItems:"center",justifyContent:"center" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sipariş Id</TableCell>
            <TableCell align="right">Ödeme Yapıldı</TableCell>
            <TableCell align="right">Toplam Tutar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>

              <TableCell align="right">
                {row.orderComplete?"Yapıldı":"Yapılmadı"}
              </TableCell>
              <TableCell align="right">{row.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}