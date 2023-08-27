'use client'
import { IsAuthenticated } from "@/lib/Auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CgDetailsMore } from 'react-icons/cg';
export default function Nav() {


    const [auth, setAuth] = useState(false)
    const [user_type, setUser_type] = useState('')
    const router = useRouter()

    useEffect(() => {
        const user_type = localStorage.getItem('user_type') || sessionStorage.getItem('user_type')
        console.log(user_type);

        setUser_type(user_type || '')
        if (IsAuthenticated()) {
            setAuth(true)
        }
        if (user_type !== 'admin') {
            router.push('/login')
            return
        }
    }, [])


    function handleLogout() {
        localStorage.removeItem('user_id')
        sessionStorage.removeItem('user_id')
        localStorage.removeItem('user_type')
        sessionStorage.removeItem('user_type')
        router.push('/login')
        setAuth(false)
    }

    return (
        <nav className="px-10 md:px-20 py-3 bg-slate-800">
            <section className=" flex items-center justify-between">
                <section className="flex items-center gap-10">
                    <Link href='/'>
                        <Image src="/esports-ftw.png" alt="bg" width={100} height={15} />
                    </Link>
                    <ul className="hidden md:block">
                        <li className="inline-block mr-5">
                            <Link className="text-white hover:text-green-500" href='/players'>Players</Link>
                        </li>
                        <li className="inline-block mr-5">
                            <Link className="text-white hover:text-green-500" href='/teams'>Teams</Link>
                        </li>
                        <li className="inline-block mr-5">
                            <Link className="text-white hover:text-green-500" href='/tournamnets'>Tournamnets</Link>
                        </li>
                        <li className="inline-block mr-5">
                            <Link className="text-white hover:text-green-500" href='/about'>About Us</Link>
                        </li>
                    </ul>
                </section>

                <section className="hidden md:block">
                    {auth ?
                        <div className="flex gap-5">
                            <Link className="text-white hover:text-green-500" href={user_type === 'admin' ? '/admin' : '/dashboard'}> Dashboard </Link>
                            <button onClick={handleLogout} className="text-white hover:text-green-500"> Logout </button>
                        </div> :
                        <Link className="text-white hover:text-green-500" href={`/login`}> Login </Link>}
                </section>

                <div className="md:hidden dropdown dropdown-end">
                    <label tabIndex={0} className="m-1"><CgDetailsMore className="text-2xl" /> </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className="text-white hover:text-green-500" href='/players'>Players</Link> </li>
                        <li><Link className="text-white hover:text-green-500" href='/teams'>Teams</Link> </li>
                        <li><Link className="text-white hover:text-green-500" href='/tournamnets'>Tournamnets</Link> </li>
                        <li><Link className="text-white hover:text-green-500" href='/about'>About Us</Link> </li>
                        {auth ? <>
                            <li><Link className="text-white hover:text-green-500" href={user_type === 'admin' ? '/admin' : '/dashboard'}> Dashboard </Link></li>
                            <li><button onClick={handleLogout} className="text-white hover:text-green-500"> Logout </button></li></>
                            :
                            <li><Link className="text-white hover:text-green-500" href={`/login`}> Login </Link></li>}

                    </ul>
                </div>
            </section>
        </nav>
    )
}
