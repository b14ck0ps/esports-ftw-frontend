import DatabaseInfo from "./DatabaseInfo";
import SiteInfoStatic from "./SiteInfoStatic";

export default function Home() {
  return (
    <>
      <main>
        <SiteInfoStatic />
        <DatabaseInfo />
        <div className="flex justify-between w-3/4 m-auto mt-10">
          {/* <RecentTournaments />
          <UpcomminTournament />
          <TopGames /> */}
        </div>
      </main>
    </>
  )
}