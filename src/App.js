import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Navbar from "./components/Navbar/Navbar";
import SideNavbar from "./components/Navbar/SideNavbar";
import { Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Login from './components/Auth/Login';
import SecondSideNavbar from './components/Navbar/SecondSideNavbar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

function App() {
  const [isRegisterd, setRegister] = useState("");
  useEffect(()=>{
   
      const user = JSON.parse(localStorage.getItem("user"));
     
      setRegister(user == null ? false : true)
      
    
   
   
  },[])
  return (
    <>

      {!isRegisterd ?
     
        <Login />
      
        :
        <><Navbar /><Grid container spacing={2} mt={2}>
          <Grid item xs={2}>
            <Item><SideNavbar /></Item>
            <Item><SecondSideNavbar /></Item>

          </Grid>
          <Grid item xs={10}>
            <Outlet />
          </Grid>
        </Grid></>
      }

    </>
  );
}

export default App;


