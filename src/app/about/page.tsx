import Image from "next/image"
import { AiFillStar, AiFillGithub } from 'react-icons/ai'
export default function page() {
    return (
        <>
            <main className="flex w-3/4 md:m-auto mt-5 p-3">
                <div className="flex-grow">
                    <h1 className="mb-10 text-6xl">Making esports  market <br /> data more accessible</h1>
                    <p className="mb-10 text-sm">Esports FTW is a unique analytical service that provides <br /> data on esports events and tournaments.</p>
                    <div className="w-[400px] md:w-[600px] px-5 py-12 bg-slate-700 rounded-xl bg-opacity-20">
                        <div className="flex items-center gap-3">
                            <AiFillStar className="text-green-500" />
                            <h2 className="py-3 text-2xl">Our mission</h2>
                        </div>
                        <p className="text-justify">
                            Increasing transparency and trust towards esports viewership data enabling sponsors, organizers and media to make data-driven decisions.
                            We believe that esports is the future of entertainment and we want to make it more accessible for everyone.
                        </p>
                    </div>
                </div>
                <Image className="hidden xl:block" height={500} width={500} src="https://escharts.com/img/about/jumptron.svg" alt="bg" />
            </main>
            <footer className="w-3/4 m-auto text-3xl text-center mt-3">
                <h1>Who are we</h1>
                <section className="lg:flex justify-around">
                    <div className="relative flex flex-col items-center mt-10">
                        <Image height={150} width={150} className="w-32 mb-3 rounded-full" src="https://avatars.githubusercontent.com/u/62308249?v=4" alt="ghicon" />
                        <a href="https://github.com/b14ck0ps"><AiFillGithub className="absolute p-1 ml-7 rounded-full bg-slate-900 fa-brands fa-github top-[5.1rem] scale-150 hover:scale-105" /></a>
                        <p className="text-lg">Azran Hossain</p>
                        <p className="text-sm text-green-500">Full-Stack Developer</p>
                    </div>
                    <div className="relative flex flex-col items-center mt-10">
                        <Image height={150} width={150} className="w-32 mb-3 rounded-full" src="https://avatars.githubusercontent.com/u/67490017?v=4" alt="ghicon" />
                        <a href="https://github.com/SadmanHadi"><AiFillGithub className="absolute p-1 ml-7 rounded-full bg-slate-900 fa-brands fa-github top-[5.1rem] scale-150 hover:scale-105" /></a>
                        <p className="text-lg">ScarYPumpkiN</p>
                        <p className="text-sm text-green-500">Database Designer</p>
                    </div>
                    <div className="relative flex flex-col items-center mt-10">
                        <Image height={150} width={150} className="w-32 mb-3 rounded-full" src="https://escharts.com/img/about/team/placeholder.svg" alt="ghicon" />
                        {/* <a href="#"><AiFillGithub className="absolute p-1 ml-7 rounded-full bg-slate-900 fa-brands fa-github top-[5.1rem] scale-150 hover:scale-105" /></a> */}
                        <p className="text-lg">Medha Chowdhury</p>
                        <p className="text-sm text-green-500">Data analyst</p>
                    </div>
                    <div className="relative flex flex-col items-center mt-10">
                        <Image height={150} width={150} className="w-32 mb-3 rounded-full" src="https://avatars.githubusercontent.com/u/96756769?v=4" alt="ghicon" />
                        <a href="https://github.com/adir-jscode"><AiFillGithub className="absolute p-1 ml-7 rounded-full bg-slate-900 fa-brands fa-github top-[5.1rem] scale-150 hover:scale-105" /></a>
                        <p className="text-lg">MD. Sarafat Ali Adir</p>
                        <p className="text-sm text-green-500">Back End Developer</p>
                    </div>
                </section>
            </footer>
        </>
    )
}
