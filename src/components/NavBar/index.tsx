import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import { styles } from './styles';
import FieldZone from '../FieldZone';
import AppBar from '@mui/material/AppBar';
import LogRegButton from '../LogRegButton';

type NavBarProps = {
  currentPage: string
}
const NavBar = (props: NavBarProps) => {
  const handleLogoClick = () => {
    window.location.href = "../";
  };

  const handleHomePage = ()=>{
    return(
      <div/>
    )
  }
  const goToPlayersPage = () =>{
    window.location.href = "../Players"
  }
  const handleSquadBuildPage = ()=>{
    return(
      <div>
        <img src="/images/SquadLineUp.png" alt="Logo" style={{ height: '20px', width: 'auto'}}/>
        <button onClick={goToPlayersPage}>Players</button>
      </div>
    )
  }
  return (
    <Box sx={{ width:"100%" }}>
      <AppBar position="static" component="nav" sx={styles.navbar}>
      
        <Toolbar sx={styles.toolbar}>
          <button onClick={handleLogoClick} style={styles.logoButton} >
            {props.currentPage === "home" ?<img src="/images/logo.png" alt="Logo" style={{ height: '40px', width: 'auto' }}></img>:
            <img src="/images/centered_logo2.png" alt="Logo" style={{ height: '40px', width: 'auto' }}/>}
          </button>
          <Box sx={{display:'flex', ml: 'auto' , flexDirection:'row'}}>
            {props.currentPage === "home" ? handleHomePage() : handleSquadBuildPage()}
          </Box>

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