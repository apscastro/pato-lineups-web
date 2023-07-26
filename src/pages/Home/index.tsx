import React from 'react';
import NavBar from '../../components/NavBarWelcome';
import { Box, Button } from '@mui/material';
import { styles } from './styles';

const Home: React.FC = () => {
  const handleClick = () => {
    window.location.href = "/BuildSquad";
  };

  return (
    <Box sx={styles.homeContainer}>
      <NavBar />
      
      <Box sx={styles.otherElements}>
        <img src="/images/centered_logo.png" alt="Logo" style={{ height: '180px', width: 'auto', filter: 'grayscale(100%)',}} />
        
        <p style={{fontSize:"30px", textAlign:"center", color:"#ffffff", marginTop:"5px"}}>Welcome to lineUps, start building squads
         and comparing players’ real life market values. Sign up or log in to your account to enter the field.</p>
        
        <Button sx={styles.quickLineUpButton} onClick={handleClick}>
          <img src="/images/QuickLineUp.png" alt="Logo" style={{ height: '30px', width: 'auto', filter: 'grayscale(100%)',}}/>
          <img src="/images/maki_arrow.png"  alt="Logo" style={{ height: '30px', width: 'auto', filter: 'grayscale(100%)',marginLeft:"15px"}}/>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
