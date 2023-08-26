import DatabaseInfo from "./DatabaseInfo";
import RecentTournaments from "./RecentTournaments";
import SiteInfoStatic from "./SiteInfoStatic";
import TopGames from "./TopGames";
import UpcomminTournament from "./UpcomminTournament";

export default function Home() {
  return (
    <>
      <main>
        <SiteInfoStatic />
        <DatabaseInfo />
        <div className="lg:flex justify-between w-3/4 m-auto mt-10">
          <RecentTournaments />
          <UpcomminTournament />
          <TopGames />
        </div>
      </main>
    </>
  )
}