import React from 'react';
import { Box } from '@mui/material';
import {styles} from './styles';
import FieldZone from '../FieldZone';
const Field = ({active}:{active:string}) =>{
    let values = active.split("-");
    let defense = values[0];
    let midfield = values[1];
    let attack = values[2];
    return(
        <Box sx={styles.fieldArea}>
            {
            active && (
                <>
            <FieldZone numberOfItems={parseInt(attack)}/>
            <FieldZone numberOfItems={parseInt(midfield)}/>
            <FieldZone numberOfItems={parseInt(defense)}/>
            </>)
            }
            <FieldZone numberOfItems={1}/>
        </Box>
    )
}

export default Field;