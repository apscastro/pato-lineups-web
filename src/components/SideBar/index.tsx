import React, { useState } from 'react';
import { Box } from '@mui/material';
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
            width: '250px',
            height: '100%',
            backgroundColor: '#f2f2f2',
          }}
        >
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