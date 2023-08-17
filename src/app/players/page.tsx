'use client'
import { Player } from "@/types"
import axios from "axios"
import { useEffect, useState } from "react"
import PlayerList from "./PlayerList"
import { Search } from "./Search"

export default function Page() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        fetchPlayers();
    }, []);

    async function fetchPlayers() {
        try {
            const response = await axios.get('https://localhost:7033/api/Player');
            setPlayers(response.data);
        } catch (error) {
            console.error('Error fetching players:', error);
        }
    }

    const filteredPlayers = players.filter(player =>
        player.ign.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
    );

    return (
        <main className="w-3/4 m-auto">
            <Search setSearchTerm={setSearchTerm} />
            <PlayerList players={filteredPlayers} />
        </main>
    );
}