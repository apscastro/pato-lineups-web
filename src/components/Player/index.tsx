import React, { useState } from 'react';
import { Box } from '@mui/material';
import {styles} from './styles';
import img from "../../images/shirt.png";
import TextField from '@mui/material/TextField';
const Player = () =>{
    const [selected, setSelected] = useState<boolean>(false);
    const handleDivClick = () => {
        setSelected(true);
    };
    const handleBlur = () => {
        setSelected(false);
    };
    return(
        <Box  sx={selected ? styles.clickedPlayer : styles.normalPlayer} onClick={() => handleDivClick()} onBlur={() => handleBlur()} tabIndex={0}  >
          <img src={img} alt={"The image"}  draggable = {false} style={{ width: '80px' }}/>
          <TextField id="outlined-basic" label="Player" variant="outlined" />
        </Box>
    )
}

export default Player;