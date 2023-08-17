'use client'
import { Player } from "@/types"
import axios from "axios"
import { useEffect, useState } from "react"
import PlayerList from "./PlayerList"
import { Search } from "./Search"
import Sort from "./Sort"

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

    const handleSort = (selectedSort: string) => {
        switch (selectedSort) {
            case 'mostWins':
                setPlayers([...players].sort((a, b) => b.playerWinnings?.length - a.playerWinnings?.length));
                break;
            case 'mostSalary':
                setPlayers([...players].sort((a, b) => b.salary - a.salary));
                break;
            default:
                setPlayers([...players].sort((a, b) => a.id - b.id));
                break;
        }
    }

    return (
        <main className="w-3/4 m-auto">
            <section className="flex gap-2 items-center">
                <Search setSearchTerm={setSearchTerm} />
                <Sort handleSortChange={handleSort} />
            </section>
            <PlayerList players={filteredPlayers} />
        </main>
    );
}