import { getFullCountryName } from '@/lib/Util'
import { Player } from '@/types'
import axios from 'axios'
import { useState } from 'react'


export default function EditDetails({ user, handleUpdate }: { user: Player | undefined, handleUpdate: Function }) {
    const [name, setName] = useState<string>(user?.name ?? '')
    const [dob, setDob] = useState<string>(user?.dob ?? '')
    const [playHours, setPlayHours] = useState<number>(user?.playHours ?? 0)
    const [street, setStreet] = useState<string>(user?.address.street ?? '')
    const [city, setCity] = useState<string>(user?.address.city ?? '')
    const [zipCode, setZipCode] = useState<string>(user?.address.zipCode ?? '')


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const res = await axios.put(`https://localhost:7033/api/Player`, {
            id: user?.id, name, dob, playHours, street, city, zipCode
        })
        if (res.status === 200) {
            handleUpdate()
        }
    }


    return (
        <>
            {/* Details Section */}
            <section className='p-2'>
                <form onSubmit={handleSubmit}>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>ID: </td>
                                <td className='text-slate-500'>{user?.id}</td>
                            </tr>
                            <tr>
                                <td>Name: </td>
                                <td>
                                    <input onChange={e => setName(e.target.value)} className='bg-inherit border-b-[1px] border-gray-400 focus:outline-none' type="text" value={name} />
                                </td>
                            </tr>
                            <tr>
                                <td>Birth Date: </td>
                                <td>
                                    <input onChange={e => setDob(e.target.value)} className='bg-inherit border-b-[1px] border-gray-400 focus:outline-none' type="date" value={dob.split('T')[0]} />
                                </td>
                            </tr>
                            <tr>
                                <td>Join Date: </td>
                                <td className='text-slate-500'>{new Date(user?.joinDate ?? '').toLocaleDateString('en-US')}</td>
                            </tr>
                            <tr>
                                <td>Play Time: </td>
                                <td>
                                    <input onChange={e => setPlayHours(parseInt(e.target.value))} className='bg-inherit border-b-[1px] border-gray-400 focus:outline-none' type="number" value={playHours} />
                                </td>
                            </tr>
                            <tr>
                                <td>Street: </td>
                                <td>
                                    <input onChange={e => setStreet(e.target.value)} className='bg-inherit border-b-[1px] border-gray-400 focus:outline-none' type="text" value={street} />
                                </td>
                            </tr>
                            <tr>
                                <td>City: </td>
                                <td>
                                    <input onChange={e => setCity(e.target.value)} className='bg-inherit border-b-[1px] border-gray-400 focus:outline-none' type="text" value={city} />
                                </td>
                            </tr>
                            <tr>
                                <td>Zip Code: </td>
                                <td>
                                    <input onChange={e => setZipCode(e.target.value)} className='bg-inherit border-b-[1px] border-gray-400 focus:outline-none' type="text" value={zipCode} />
                                </td>
                            </tr>
                            <tr>
                                <td>Country: </td>
                                <td className='text-slate-500'>{getFullCountryName(user?.address.country ?? '')}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type='submit' className='btn btn-primary my-5 ml-3 btn-sm'>Update</button>
                </form>
            </section>
        </>
    )
}
