import React, { useState } from 'react';

import { Box } from '@mui/material';
import Draggable, {DraggableCore} from "react-draggable";

import img from "../../images/shirt.png";

const Moveable: React.FC = () => {
    return(
        <Draggable>
      <img src={img} alt={"The image"}  draggable = {false} style={{ width: '100px' }}/>
    </Draggable>
    );
};

export default Moveable;
