'use client'
import { Player } from "@/types"
import axios from "axios"
import { useEffect, useState } from "react"
import PlayerList from "./PlayerList"
export default function page() {

    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
        fetchPlayers()
    }, [])

    async function fetchPlayers() {
        const response = await axios.get('https://localhost:7033/api/Player')
        setPlayers(response.data)
    }


    return (
        <main className="w-3/4 m-auto">
            <PlayerList players={players} />
        </main>
    )
}



