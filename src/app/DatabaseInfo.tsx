'use client'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'

export default function DatabaseInfo() {

    const [tournaments, setTournaments] = useState(0)
    const [games, setGames] = useState(0)
    const [players, setPlayers] = useState(0)
    const [teams, setTeams] = useState(0)

    const [loading, setLoading] = useState(true)

    useState(() => {
        getPlayerCount()
    })

    async function getPlayerCount() {
        const response = await axios.get('https://localhost:7033/api/Player');
        setPlayers(response.data?.length)
        setLoading(false)
    }

    return (
        <div
            className="bg-gray-900 w-3/4 m-auto rounded-b-lg "
        >
            {loading ? <div className='flex justify-center items-center'><span className='loading loading-infinity p-10 loading-lg'></span></div> :
                <section className='md:flex items-center justify-between'>
                    <div className="flex gap-8 items-center p-5">
                        <p>Our Database Incluses:</p>
                    </div>
                    <div
                        className="flex justify-between gap-8 items-center p-5 border-l-2 border-y-0 border-collapse border-gray-700 hover:cursor-pointer hover:bg-gray-700 flex-grow"
                    >
                        <div>
                            <p className="text-xl font-semibold">{tournaments}</p>
                            <p>{"Tournaments & events".toUpperCase()}</p>
                        </div>
                        <i className="fa-solid fa-arrow-right" />
                    </div>
                    <div
                        className="flex justify-between gap-8 items-center p-5 border-l-2 border-y-0 border-collapse border-gray-700 hover:cursor-pointer hover:bg-gray-700 flex-grow"
                    >
                        <div>
                            <p className="text-xl font-semibold">{games}</p>
                            <p>{"games".toUpperCase()}</p>
                        </div>
                        <i className="fa-solid fa-arrow-right" />
                    </div>
                    <div
                        className="flex justify-between gap-8 items-center p-5 border-l-2 border-y-0 border-collapse border-gray-700 hover:cursor-pointer hover:bg-gray-700 flex-grow"
                    >
                        <Link href={`/players`}>
                            <p className="text-xl font-semibold">{players}</p>
                            <p>{"players".toUpperCase()}</p>
                        </Link>
                        <i className="fa-solid fa-arrow-right" />
                    </div>
                    <div
                        className="flex justify-between gap-8 items-center p-5 border-l-2 border-y-0 border-collapse border-gray-700 hover:cursor-pointer hover:bg-gray-700 flex-grow"
                    >
                        <div>
                            <p className="text-xl font-semibold">{teams}</p>
                            <p>{"teams".toUpperCase()}</p>
                        </div>
                        <i className="fa-solid fa-arrow-right" />
                    </div>
                </section>}
        </div>
    )
}
