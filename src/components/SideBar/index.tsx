import React, { useState } from 'react';
import { Box } from '@mui/material';
import {styles} from './styles';
import { Select, MenuItem } from '@mui/material';
const SideBar = ({ tactics, active }: { tactics: string[], active:string }) =>{

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
        active = event.target.value;
    };

    return (
        <Box
          sx={{
            width: '250px',
            height: '100%',
            backgroundColor: '#f2f2f2',
          }}
        >
            <Select value={selectedValue} onChange={handleChange} fullWidth>
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