import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export default function SecondSideNavbar() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',marginTop:3 }}>

      <Divider />
      <nav aria-label="secondary mailbox folders">
        <p>Satın Alma</p>
        <List>
          <ListItem disablePadding>
            <Link to={"Products/"} className='nav-link'>
              <ListItemButton>
                <ListItemText primary="Ürünler" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to={"Sepet/"} className='nav-link'>
              <ListItemButton>
                <ListItemText primary="Sepete Git" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
          <Link to={"Siparislerim/"} className='nav-link'>
            <ListItemButton >
              <ListItemText primary="Siparişlerim" />
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
