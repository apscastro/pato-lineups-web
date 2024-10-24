import axios from "axios";

export type Player = {
    playerId: number,
    playerName:string,
    playerPosition:string,
    playerMarketValue: number,
    playerImage:string,
    playerNationImage:string,
    playerNationTitle:string,
    playerBirth:Date,
    playerClub: Club,
}

export type Club = {
    clubId: number,
    clubName: string,
    clubImage:string,
    clubLeagueId:number,
    clubNationId: number
}

export type DefaultResponse = {
    currentPage: number,
    players: Player[],
    totalPages: number,
    totalPlayers: number,
}
export const getPlayers = async(page:number) => {
    const response = await axios.get<DefaultResponse>(`http://localhost:8090/api/players/${page}`);
    return response.data;
}

export const getPlayersByName = async(name:string) => {
    const response = await axios.get<DefaultResponse>(`http://localhost:8090/api/player-by-name/${name}`);
    return response.data;
}