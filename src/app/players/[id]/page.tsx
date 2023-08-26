'use client'

import { getFullCountryName } from "@/lib/Util";
import { Player } from "@/types";
import axios from "axios";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function page({ params }: { params: { id: string } }) {

    const [user, setUser] = useState<Player | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        const response = await axios.get(`https://localhost:7033/api/Player/${params.id}`);
        setUser(response.data);
        setLoading(false);
    }

    return (
        <main className="w-3/6 m-auto card card-body bg-slate-700 bg-opacity-20 mt-10">
            {loading ? <div className='flex justify-center items-center'><span className='loading loading-infinity p-10 loading-lg'></span></div> :
                <section className='p-2'>
                    <main className='flex gap-4 items-center justify-center border-b-[1px] border-gray-50 border-opacity-20'>
                        <div className='w-40 rounded-full overflow-hidden'>
                            <Image src={`/${user?.picture}` ?? '/'} alt="avatar" width={400} height={400} className="object-fill object-center" />
                        </div>
                        <section>
                            <div className='flex items-center gap-5'>
                                <strong>{user?.ign}</strong> {
                                    user?.address?.country && (
                                        <span title={getFullCountryName(user.address.country)}>
                                            <Image
                                                src={`https://flagcdn.com/${user?.address?.country}.svg`}
                                                className="rounded-sm"
                                                width={35}
                                                height={35}
                                                alt="flag"
                                            />
                                        </span>
                                    )}
                            </div>
                            <h4>{user?.email}</h4>
                        </section>
                    </main>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>ID: </td>
                                <td>{user?.id}</td>
                            </tr>
                            <tr>
                                <td>Name: </td>
                                <td>{user?.name}</td>
                            </tr>
                            <tr>
                                <td>Salary: </td>
                                <td>$ {user?.salary} / Month </td>
                            </tr>
                            <tr>
                                <td>Birth Date: </td>
                                <td>{new Date(user?.dob ?? '').toLocaleDateString("en-US")}</td>
                            </tr>
                            <tr>
                                <td>Join Date: </td>
                                <td>{new Date(user?.joinDate ?? '').toLocaleDateString('en-US')}</td>
                            </tr>
                            <tr>
                                <td>Play Time: </td>
                                <td>{user?.playHours} H</td>
                            </tr>
                            <tr>
                                <td>Street: </td>
                                <td>{user?.address.street}</td>
                            </tr>
                            <tr>
                                <td>City: </td>
                                <td>{user?.address.city}</td>
                            </tr>
                            <tr>
                                <td>Zip Code: </td>
                                <td>{user?.address.zipCode}</td>
                            </tr>
                            <tr>
                                <td>Country: </td>
                                <td>{getFullCountryName(user?.address.country ?? '')}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>}
            <Link className='text-blue-500 font-semibold inline-flex items-center gap-2 mt-4' href='/players'> <IoMdArrowBack /> back </Link>
        </main>
    )
}
