'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function page() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const router = useRouter()

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const adminId = sessionStorage.getItem('user_id') || localStorage.getItem('user_id')
        const res = await axios.post('https://localhost:7033/api/Manager', { name, email, password, adminId })
        if (res.status !== 201) {
            setError('Something went wrong')
            return
        } else {
            router.push('/admin/managers')
        }
    }


    return (
        <main className="md:w-3/6 m-auto mt-5 px-5">
            <form onSubmit={handleRegister} className="bg-slate-700 bg-opacity-20 rounded-lg p-10">
                <h2 className="text-2xl py-4">Register A New Manager</h2>
                {error && <div className="alert alert-error">{error}</div>}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Manager Name</span>
                    </label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="John doe" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Manager Email</span>
                    </label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="manager@email.com" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Manager Password</span>
                    </label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="********" className="input input-bordered w-full max-w-xs" />
                </div>
                <button type="submit" className="btn mt-5 btn-info">Add</button>
            </form>
            <Link className='text-blue-500 font-semibold inline-flex items-center gap-2 mt-4' href='/admin'> <IoMdArrowBack /> back </Link>
        </main>
    )
}
