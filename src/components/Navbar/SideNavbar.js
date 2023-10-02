import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export default function SideNavbar() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <Link to={"ProductList/"} className='nav-link'>
              <ListItemButton>
                <ListItemText primary="Ürünler" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to={"Categories/"} className='nav-link'>
              <ListItemButton>
                <ListItemText primary="Kategori" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
          <Link to={"UserList/"} className='nav-link'>
            <ListItemButton >
              <ListItemText primary="Kullanıcılar" />
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
