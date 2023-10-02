import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import axios from "axios"
import { Button } from '@mui/material';
import { UserContext } from '../../Services/UserService/UserContext';

const User = () => {
    const { users } = useContext(UserContext)
    const navigate = useNavigate();


    const deleteUser = (id) => {
        axios.delete(`http://localhost:8004/api/Users/delete?id=${id}`).then(() => {
            window.location.reload();
        })
    }

    return (
        <>

            {users.filter(user => user.status === true).map((user) =>  (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.firstName}
                            </TableCell>

                            <TableCell align="right">{user.lastName}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right"><Button variant="contained" color='warning' onClick={() => navigate(`/UserEdit/${user.id}`)}>Güncelle</Button></TableCell>
                            <TableCell align="right"><Button variant="contained" color='error' onClick={() => { deleteUser(user.id) }} >Sil</Button></TableCell>

                        </TableRow>
                    )
                
               
            )}
        </>
    );
}

export default User;