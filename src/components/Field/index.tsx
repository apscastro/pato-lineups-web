import React from 'react';
import { Box } from '@mui/material';
import {styles} from './styles';
import FieldZone from '../FieldZone';
const Field = ({active}:{active:string}) =>{
    
    return(
        <Box sx={styles.fieldArea}>
            {
            active === "4-4-2" && (
                <>
            <FieldZone numberOfItems={2}/>
            <FieldZone numberOfItems={4}/>
            <FieldZone numberOfItems={4}/>
            </>)
            }
            {
            active === "4-5-1" && (
                <>
            <FieldZone numberOfItems={1}/>
            <FieldZone numberOfItems={5}/>
            <FieldZone numberOfItems={4}/>
            </>)
            }
            {active === "5-3-2" && (
                <>
            <FieldZone numberOfItems={2}/>
            <FieldZone numberOfItems={3}/>
            <FieldZone numberOfItems={5}/>
            </>)
            }
            {active === "4-3-3" && (
                <>
            <FieldZone numberOfItems={3}/>
            <FieldZone numberOfItems={3}/>
            <FieldZone numberOfItems={4}/>
            </>)
            }
            {active === "5-4-1" && (
                <>
            <FieldZone numberOfItems={1}/>
            <FieldZone numberOfItems={4}/>
            <FieldZone numberOfItems={5}/>
            </>)
            }
            <FieldZone numberOfItems={1}/>
        </Box>
    )
}

export default Field;