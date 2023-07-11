import React from 'react';
import { Box } from '@mui/material';
import {styles} from './styles';
import Player from '../Player';
import Moveable from '../Moveable';
const FieldZone = ({ numberOfItems }: { numberOfItems: number }) =>{
    
    const createNObjects = () =>{
        const moveables = [];
        for(let i = 0; i < numberOfItems; i++){
            moveables.push(<Moveable key = {i}></Moveable>);
        }
        return moveables;
    }
    return(
        <Box sx={{flexGrow: 1,display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',}}>

            {
                createNObjects()
            }

        </Box>
    )
}

export default FieldZone;