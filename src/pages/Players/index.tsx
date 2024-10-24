import { useEffect, useState } from "react"
import { getPlayers, Player } from "../../api/players";
import { Box, Icon, SvgIcon, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from "@mui/material";
import TopBarBuilder from "../../components/TopBarBuilder";
import NavBar from "../../components/NavBar";
import { styles } from "./styles";


const PlayersPage = () =>{
    const [players, setPlayers] = useState<Player[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [page, setPage] = useState<number>(0)
    useEffect(()=>{
        const fetchPlayers = async () =>{
            const data = await getPlayers(page+1)
            setPlayers(data.players);
            setTotalPages(data.totalPlayers)
        }
        fetchPlayers();
    },[page])

    const RenderPlayers = () =>{
        return(
            <>
            {players.map((player:Player, index:number) =>(
                <TableRow key={index}>
                    <TableCell sx={styles.tableCell}>{player.playerName}</TableCell>
                    <TableCell sx={styles.tableCell}><img height={"40px"} src={player.playerClub.clubImage} title={player.playerClub.clubName} alt={player.playerClub.clubName}/></TableCell>
                    <TableCell sx={styles.tableCell}><img height={"15px"} src={player.playerNationImage} title={player.playerNationTitle} alt={player.playerNationTitle}/></TableCell>
                    <TableCell sx={styles.tableCell}>{player.playerPosition}</TableCell>
                    <TableCell sx={styles.tableCell}>{player.playerMarketValue}</TableCell>
                </TableRow>
            ))}
            </>
        )
    }

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
      ) => {
        setPage(newPage);
    };
    return (
        <Box>
            <NavBar currentPage="Players"></NavBar>
            <Box sx={styles.tableContainer}>
                <Table sx={styles.table}>
                    <TableHead>
                        <TableCell sx={styles.tableCell}>Name</TableCell>
                        <TableCell sx={styles.tableCell}>Team</TableCell>
                        <TableCell sx={styles.tableCell}>Nation</TableCell>
                        <TableCell sx={styles.tableCell}>Position</TableCell>
                        <TableCell sx={styles.tableCell}>Market Value</TableCell>
                    </TableHead>
                    <TableBody>
                        {players.length ? <RenderPlayers /> : <TableRow><TableCell>No Players</TableCell></TableRow>}
                    </TableBody>
                    
                </Table>
                <TablePagination count={totalPages} page={page} rowsPerPage={10}  onPageChange={handleChangePage} ></TablePagination>
            </Box>
        </Box>
    )
}

export default PlayersPage