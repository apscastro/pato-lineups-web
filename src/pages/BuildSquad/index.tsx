import React from 'react';
import Field from '../../components/Field';
import SideBar from '../../components/SideBar';
import { Box } from '@mui/material';
const BuildSquad = () =>{
    let tactics = ["4-4-2", "4-3-3", "5-3-2","5-4-1"];
    return(
        <Box sx={{ display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 0,
        background: '#aef359',
        height: '100vh',}}>
            <SideBar tactics={tactics} active={""} ></SideBar>
            <Field></Field>
        </Box>
    )
}

export default BuildSquad;