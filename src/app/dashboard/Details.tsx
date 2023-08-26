import { getFullCountryName } from '@/lib/Util'
import { Player } from '@/types'
import React from 'react'

export default function Details({ user }: { user: Player | undefined }) {
    return (
        <>
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
            </section>
        </>
    )
}
