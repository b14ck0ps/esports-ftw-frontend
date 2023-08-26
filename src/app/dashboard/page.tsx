'use client'
import { getFullCountryName } from '@/lib/Util'
import { Player } from '@/types'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'

export default function page() {


    const [user, setUser] = useState<Player>()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const id = 102
        getUser(id)
        setLoading(false)
    }, [])


    async function getUser(id: Number) {
        try {
            const res = await axios.get(`https://localhost:7033/api/Player/${id}`)
            if (res.status === 200) {
                setUser(res.data)
            }

        } catch (error) {
            console.log('what hell happend ???' + error);
        }
    }


    if (loading) {
        return (
            <main className='flex items-center justify-center flex-col h-screen'>
                <span className='loading loading-infinity loading-lg'></span>
            </main>
        )
    }

    return (
        <main className='p-2 md:w-3/4 m-auto'>
            <h1 className='text-2xl font-bold mt-5'>Profile</h1>
            <section className='mt-10 bg-gray-800 rounded-md'>

                {/* Main Section */}
                <section className=' flex justify-between  items-center border-b-[1px] border-gray-600 p-2'>
                    <main className='flex gap-4 items-center'>
                        <div className='w-20 rounded-full overflow-hidden'>
                            <Image src={`/${user?.picture}` ?? '/'} alt="avatar" width={150} height={150} className="object-fill object-center" />
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
                    <Link href='/players/edit' className='btn btn-secondary btn-square'>Edit</Link>
                </section>

                {/* Details Section */}
                <section className='p-2'>
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
                </section>
            </section>
            <Link className='text-blue-500 font-semibold flex items-center gap-2 mt-4' href='/'> <IoMdArrowBack /> back </Link>
        </main>
    )
}
