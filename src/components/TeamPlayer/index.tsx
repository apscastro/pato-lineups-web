import React, { useEffect, useState } from 'react';
import { Autocomplete, Box } from '@mui/material';
import {styles} from './styles';
import img from "../../images/shirt.png";
import TextField from '@mui/material/TextField';
import { getPlayersByName, Player } from '../../api/players';
const TeamPlayer = () =>{
    const [playerName, setPlayerName] = useState<string>("")
    const [selected, setSelected] = useState<boolean>(false);
    const [possiblePlayers, setPossiblePlayers] = useState<Player[]>([])
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
    useEffect(()=>{
        const fetchPlayers = async () =>{
            if(playerName !== ""){
                const data = await getPlayersByName(playerName)
                setPossiblePlayers(data.players);
            }
        }
        fetchPlayers();
    },[playerName])
    const handleDivClick = () => {
        setSelected(true);
    };
    const handleBlur = () => {
        setSelected(false);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPlayerName(event.target.value)
        console.log(possiblePlayers)
    }

    const handlePlayerSelect = (event: React.SyntheticEvent, value: Player | string | null) => {
        if (typeof value === 'string') {
            // Handle free input (e.g., if the user typed a new name)
            setPlayerName(value);
        } else {
            // Handle when a Player is selected from the list
            setSelectedPlayer(value);
            setPlayerName(value ? value.playerName : "");
        }
    };

    return(
        <Box  sx={selected ? styles.clickedPlayer : styles.normalPlayer} onClick={() => handleDivClick()} onBlur={() => handleBlur()} tabIndex={0}  >
          <img src={selectedPlayer? selectedPlayer.playerImage : img} alt={"The image"}  draggable = {false} style={{ width: '80px' }}/>
          <Autocomplete
                id="player-autocomplete"
                options={possiblePlayers}
                getOptionLabel={(option: Player|string) => typeof option === 'string' ? "" : option.playerName}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Player"
                        variant="outlined"
                        onChange={handleNameChange}
                    />
                )}
                onChange={handlePlayerSelect} // Handle when the user selects an option
                value={selectedPlayer} // Current value (selected player)
                freeSolo // Allows typing new text as well
                fullWidth
            />
        </Box>
    )
}

export default TeamPlayer;