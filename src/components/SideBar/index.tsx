import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import {styles} from './styles';
import { Select, MenuItem } from '@mui/material';
const SideBar = ({ tactics, active, onTacticChange }: { tactics: string[], active:string , onTacticChange: any}) =>{

  const handleChange = (event : any) => {
    const selectedValue = event.target.value;
    onTacticChange(selectedValue);
  };

    return (
        <Box
          sx={{
            width: '350px',
            height: '100%',
            backgroundColor: '#f2f2f2',
          }}
        >
          <Typography sx={{padding:'5px'}}>Select Formation</Typography>
            <Select value={active} onChange={handleChange} fullWidth>
            {tactics.map((tactic, index) => (
          <MenuItem key={index} value={tactic}>
            {tactic}
          </MenuItem>
        ))}
            </Select>
        </Box>
    );
}

export default SideBar;