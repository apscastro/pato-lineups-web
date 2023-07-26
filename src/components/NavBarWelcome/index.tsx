import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { styles } from './styles';
import FieldZone from '../FieldZone';
import AppBar from '@mui/material/AppBar';
import LogRegButton from '../LogRegButton';

const NavBar = () => {
  const handleLogoClick = () => {
    console.log('Logo clicked!');
  };

  return (
    <Box sx={{ width:"100%" }}>
      <AppBar position="static" component="nav" sx={styles.navbar}>
        <Toolbar sx={styles.toolbar}>
          <button onClick={handleLogoClick} style={styles.logoButton} >
            <img src="/images/logo.png" alt="Logo" style={{ height: '40px', width: 'auto' }}/>
          </button>
          <Box sx={{display:'flex', ml: 'auto' , flexDirection:'row'}}>
            <LogRegButton buttonName="sign up" />
            <LogRegButton buttonName="log in" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;