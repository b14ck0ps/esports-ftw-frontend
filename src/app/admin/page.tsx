'use client'
import { Admin } from '@/types'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
export default function Details() {

    const [admin, setAdmin] = useState<Admin | undefined>(undefined)
    const router = useRouter()

    useEffect(() => {
        getAdmin()
    }, [])

    async function getAdmin() {

        const id = sessionStorage.getItem('user_id')

        if (!id) {
            router.push('/admin/login')
            return
        }

        const res = await axios.get(`https://localhost:7033/api/Admin/${id}`)
        setAdmin(res.data)


    }

    return (
        <main className='w-3/6 m-auto mt-5'>
            <nav className='py-2 bg-slate-700 items-center bg-opacity-20 mb-4 rounded-md flex justify-between px-3'>
                <Link href={`/admin/managers`} className='link link-primary'>List Of Managers</Link>
                <button className='btn btn-outline '>Add Manager</button>
            </nav>
            <main className=' bg-slate-700 bg-opacity-20 rounded-lg'>
                {/* Details Section */}
                <section className='p-2'>

                    <Image className='m-auto' src="/default.png" width={150} height={150} alt="" />

                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>ID: </td>
                                <td>{admin?.id}</td>
                            </tr>
                            <tr>
                                <td>Name: </td>
                                <td>{admin?.name}</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                                <td>{admin?.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </main>
    )
}
