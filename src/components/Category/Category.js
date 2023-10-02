import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useState,useEffect } from 'react';
import axios from "axios"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Category=()=>{
  const navigate = useNavigate()
    const [categoryList,setCategoryList] = useState([])
    useEffect(()=>{
     axios.get("http://localhost:8001/api/Category/getcategories").then(data=>setCategoryList(data.data));
  
  
    },[])
    const deleteCategory = (id)=>{
      axios.delete(`http://localhost:8001/api/Category/DeleteCategory?id=${id}`).then(() => {
        window.location.reload();
      })
    }
  
return(
    <>
    {categoryList.map((category) => (
        <TableRow
          key={category.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {category.categoryName}
          </TableCell>
          <TableCell component="th" scope="row" align="center"><Button variant="contained" color='warning' onClick={()=>{navigate(`/CategoryEdit/${category.id}`)}} >Güncelle</Button></TableCell>
          <TableCell component="th" scope="row" align="center"><Button variant="contained" color='error' onClick={() => { deleteCategory(category.id) }} >Sil</Button></TableCell>
        
        </TableRow>
      ))}
      </>
);
}

export default Category;