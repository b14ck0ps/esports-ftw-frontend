import { getFullCountryName } from '@/lib/Util';
import { Player } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PlayerList({ players }: { players: Player[] }): React.JSX.Element {
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
                    {players.map((player, i) => {
                        return <tr key={player.id}>
                            <th className="text-xl">{i + 1}</th>
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
                            <td><span className="text-xl">{player.salary}</span></td>
                            <td><span className="text-xl">{player.playerWinnings?.length ?? 'none'}</span></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}