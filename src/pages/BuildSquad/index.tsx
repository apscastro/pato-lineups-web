import React, { useState } from 'react';
import Field from '../../components/Field';
import SideBar from '../../components/SideBar';
import { Box } from '@mui/material';
const BuildSquad = () =>{
    const tactics = ["3-4-3","3-5-2","3-6-1","4-2-4","4-5-1","4-4-2", "4-3-3", "5-3-2", "5-4-1"];
    const [activeTactic, setActiveTactic] = useState("");

    const handleTacticChange = (tactic: string) => {
        setActiveTactic(tactic);
    };
    return(
        <Box sx={{ display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 0,
        background: '#aef359',
        height: '100vh',}}>
            <SideBar tactics={tactics} active={activeTactic} onTacticChange={handleTacticChange} ></SideBar>
            <Field active = {activeTactic}></Field>
        </Box>
    )
}

export default BuildSquad;