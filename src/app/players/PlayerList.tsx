import { getFullCountryName } from '@/lib/Util';
import { Player } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function PlayerList({ players }: { players: Player[] }): React.JSX.Element {

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const playersForPage = players.slice(startIndex, endIndex);

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Salary</th>
                        <th>Total Winnings</th>
                    </tr>
                </thead>
                <tbody>
                    {playersForPage.map((player, i) => {
                        const playerIndex = startIndex + i;
                        return <tr key={player.id}>
                            <th className="text-xl">{playerIndex + 1}</th>
                            <td className="flex items-center gap-2">
                                {player?.address?.country && (
                                    <span title={getFullCountryName(player.address.country)}>
                                        <Image
                                            src={`https://flagcdn.com/${player?.address?.country}.svg`}
                                            className="rounded-sm"
                                            width={35}
                                            height={35}
                                            alt="flag"
                                        />
                                    </span>
                                )}
                                <section>
                                    <Link href={`/players/${player.id}`}>
                                        <p className="text-xl">{player.ign}</p>
                                        {player.name}</Link>
                                    <span className="px-1">&middot;</span>
                                    <span>Age: {new Date().getFullYear() - new Date(player.dob).getFullYear()}</span>
                                </section>
                            </td>
                            <td>
                                <p className="text-xl">{player?.team?.name ?? 'Free Agent'}</p>
                                Joined: {new Date(player?.joinDate).toLocaleDateString('en-GB')}
                            </td>
                            <td><span className="text-xl">{player.salary} $</span></td>
                            <td><span className="text-xl">{player.playerWinnings?.length ?? 'none'}</span></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <section className='flex justify-center items-center mt-10'>
                <div className="join">
                    <button
                        className="join-item btn"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                    {Array.from({ length: Math.ceil(players.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            className={`join-item btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="join-item btn"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={endIndex >= players.length}
                    >
                        &gt;
                    </button>
                </div>
            </section>
        </div>
    )
}