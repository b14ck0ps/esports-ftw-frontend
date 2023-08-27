'use client'
import { ManagerBase } from "@/types";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import ListOfManager from "./ListOfManagers";
import axios from "axios";

export default function page() {

    const [managers, setManagers] = useState<ManagerBase[]>()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getManagers()
    }, [])

    async function getManagers() {
        const res = await axios.get('https://localhost:7033/api/Manager')
        setManagers(res.data)
        setLoading(false)
    }


    return (
        <main className="w-3/6 m-auto">
            {loading ? <span className='loading loading-infinity loading-lg p-5 flex justify-center m-auto mt-20'></span> : <ListOfManager managers={managers} />}
            <Link className='text-blue-500 font-semibold inline-flex items-center gap-2 mt-4' href='/admin'> <IoMdArrowBack /> back </Link>
        </main>
    )
}
