const r_tournaments = [
    {
        name: "Valorant Chapion League 2034",
        game: "Valorant",
        platform: "PC",
        date: new Date().toLocaleDateString().replace(/\//g, "."),
    },
    {
        name: "Overwatch World Cup 2034",
        game: "Overwatch",
        platform: "PC",
        date: new Date().toLocaleDateString().replace(/\//g, "."),
    },
    {
        name: "League of Legends Championship 2034",
        game: "League of Legends",
        platform: "PC",
        date: new Date().toLocaleDateString().replace(/\//g, "."),
    },
    {
        name: "Dota 2 International 2034",
        game: "Dota 2",
        platform: "PC",
        date: new Date().toLocaleDateString().replace(/\//g, "."),
    },
];
function getRandomFutureDate() {
    return new Date(
        Date.now() + Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
    )
        .toLocaleDateString()
        .replace(/\//g, ".");
}
export default function UpcomminTournament() {
    return (
        <main>
            <div className="flex justify-between items-center">
                <div>
                    <div className="flex gap-20 items-center">
                        <div className="flex items-center gap-3">
                            <i className="fa-solid fa-arrow-trend-up" />
                            <p className="font-bold">Upcomming Tournaments</p>
                        </div>
                        <div
                            className="flex text-sm items-center gap-4 bg-slate-800 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-700 transition-all"
                        >
                            <p>More</p>
                            <i className="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                    <div className="mt-2">
                        {r_tournaments.map((r) => (
                            <div
                                className="flex justify-between mb-2 bg-slate-800 p-3 rounded-xl cursor-pointer hover:scale-x-105 transition-all"
                            >
                                <div>
                                    <div className="flex items-center gap-3">
                                        <svg
                                            className="w-12 h-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 128 128"
                                            viewBox="0 0 128 128"
                                            id="pc"
                                        ><path
                                                fill="#505070"
                                                d="M76 77.98H12c-3.309 0-6-2.691-6-6v-36c0-3.309 2.691-6 6-6h64c3.309 0 6 2.691 6 6v36c0 3.309-2.691 6-6 6zm-64-44c-1.103 0-2 .897-2 2v36c0 1.103.897 2 2 2h64c1.103 0 2-.897 2-2v-36c0-1.103-.897-2-2-2H12z"
                                            /><path
                                                fill="#505070"
                                                d="M44 92a2 2 0 0 1-2-2V76a2 2 0 0 1 4 0v14a2 2 0 0 1-2 2z"
                                            /><path
                                                fill="#505070"
                                                d="M56 92H32a2 2 0 0 1 0-4h24a2 2 0 0 1 0 4zM116 92h-16c-3.309 0-6-2.691-6-6V36c0-3.309 2.691-6 6-6h16c3.309 0 6 2.691 6 6v50c0 3.309-2.691 6-6 6zm-16-58c-1.103 0-2 .897-2 2v50c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V36c0-1.103-.897-2-2-2h-16z"
                                            /><path
                                                fill="#505070"
                                                d="M120 46H96a2 2 0 0 1 0-4h24a2 2 0 0 1 0 4zM108 80c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"
                                            /></svg
                                        >

                                        <div>
                                            <h3 className="text-xs font-semibold">
                                                {r.name}
                                            </h3>
                                            <h6 className="text-xs opacity-70">
                                                {r.game} - {r.platform}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs">
                                    {getRandomFutureDate()}
                                </p>
                            </div>))}
                    </div>
                </div>
            </div>
        </main>
    )
}
