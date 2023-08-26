'use client'
import { getFullCountryName } from '@/lib/Util'
import { Player } from '@/types'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import Details from './Details'
import EditDetails from './EditDetails'

export default function page() {

    const router = useRouter()

    const [user, setUser] = useState<Player>()
    const [loading, setLoading] = useState(true)

    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        const id = parseInt(localStorage.getItem('user_id') || '0')
        if (id === 0 || isNaN(id)) {
            router.push('/login')
            return
        }
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

    function handleUpdate() {
        setEditMode(false)
        getUser(user?.id ?? 0)
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
                    <button onClick={() => setEditMode(!editMode)} className={`mr-5 btn btn-sm ${editMode ? 'btn-error' : 'btn-secondary'}`}>{editMode ? 'Cancle' : 'Edit'}</button>
                </section>
                {editMode ? <EditDetails user={user} handleUpdate={handleUpdate} /> : <Details user={user} />}
            </section>
            <Link className='text-blue-500 font-semibold inline-flex items-center gap-2 mt-4' href='/'> <IoMdArrowBack /> back </Link>
        </main>
    )
}
