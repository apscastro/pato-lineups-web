import React from 'react';
import { Box } from '@mui/material';
import {styles} from './styles';
import FieldZone from '../FieldZone';
const Field = () =>{
    return(
        <Box sx={styles.fieldArea}>
            <FieldZone numberOfItems={2}/>
            <FieldZone numberOfItems={4}/>
            <FieldZone numberOfItems={4}/>
            <FieldZone numberOfItems={1}/>
        </Box>
    )
}

export default Field;