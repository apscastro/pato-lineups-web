import { Button } from '@mui/material';
import React from 'react';
const Home = () =>{

    const handleClick = () =>{
        window.location.href = "/BuildSquad";
    }    
    return(
        <div>
            <Button onClick={handleClick}>Click to open SquadBuilder</Button>
        </div>
    )
}

export default Home;