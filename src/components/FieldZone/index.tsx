import React, {useState, useEffect, useRef} from 'react';
import { Box } from '@mui/material';
import {styles} from './styles';
import Player from '../Player';
import Moveable from '../Moveable';
const FieldZone = ({ numberOfItems }: { numberOfItems: number }) =>{
    const containerRef = useRef<HTMLDivElement>(null);
  const [containerBounds, setContainerBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
/*
  useEffect(() => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      setContainerBounds({ left, top, right: left + width, bottom: top + height });
    }
  }, []);*/

  const createNObjects = () => {
    const moveables: JSX.Element[] = [];
    for (let i = 0; i < numberOfItems; i++) {
      moveables.push(<Player key={i}  />);
    }
    return moveables;
  };

    return(
        <Box ref={containerRef} sx={{flexGrow: 1,display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', /*border: '1px solid black',*/width:'1000px'}}>

            {
                createNObjects()
            }

        </Box>
    )
}

export default FieldZone;