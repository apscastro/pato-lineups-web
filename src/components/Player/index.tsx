import React from 'react';
import { Box } from '@mui/material';
import {styles} from './styles';
import img from "../../images/shirt.png";
const Player = () =>{
    return(
        <img src={img} alt={"The image"}  style={{ width: '100px' }}/>
    )
}

export default Player;