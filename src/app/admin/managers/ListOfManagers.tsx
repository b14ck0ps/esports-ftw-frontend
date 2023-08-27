'use client'
import { ManagerBase } from '@/types';
import React from 'react';

export default function ListOfManager({ managers: managers }: { managers: ManagerBase[] | undefined }): React.JSX.Element {

    return (
        <main className="overflow-x-auto mt-10">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Hiredate</th>
                    </tr>
                </thead>
                <tbody>
                    {managers?.map((manager, i) => {
                        return <tr key={manager.id}>
                            <th className='text-lg' >{i + 1}</th>
                            <td className='text-lg' >{manager.name}</td>
                            <td className='text-lg' >{manager.email}</td>
                            <td className='text-lg' >{new Date(manager.hireDate).toLocaleDateString('en-US')}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </main>
    )
}