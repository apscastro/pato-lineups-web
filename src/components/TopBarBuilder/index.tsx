import React, { useState } from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import {styles} from './styles';
import { Select, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
const TopBarBuilder = ({ tactics, active, onTacticChange }: { tactics: string[], active:string , onTacticChange: any}) =>{

  const handleChange = (event : any) => {
    const selectedValue = event.target.value;
    onTacticChange(selectedValue);
  };

    return (
        <Box sx={{ width:"100%" }}>
        <AppBar position="static" component="nav" sx={styles.navbar}>
          <Toolbar sx={styles.toolbar}>
            <Box sx={{display:'flex',flexDirection:'row', alignItems:'center'}}>
              <Typography sx={{marginLeft:"70px"}}>Formation</Typography>
              <Select value={active} onChange={handleChange} style={styles.select}>
                {tactics.map((tactic, index) => (
                  <MenuItem key={index} value={tactic}>{tactic}</MenuItem>))
                }
              </Select>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'right', mr:'70px',flexGrow: 1 }}>
              SquadName
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default TopBarBuilder;