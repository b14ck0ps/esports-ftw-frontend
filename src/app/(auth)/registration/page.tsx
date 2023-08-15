'use client'
import axios from "axios";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import React, { useState } from "react";
export default function SignupPage() {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post("https://localhost:7033/api/Player", {
                name: name,
                email: email,
                password: password,
                dob: dob,
                picture: "default.png",
                salary: 0,
                playHours: 0,
                joinDate: new Date(),
            });

            if (response.status === 201) {
                router.push('/login')
            }

        } catch (error) {

            if ((error as any).response.status === 400) {
                if ((error as any).response.data.Email) {
                    setEmailError((error as any).response.data.Email[0]);
                }
            }
            // console.error("Error signing up:", error);
            // setErrorMessage("An error occurred while signing up.");
        }
    };

    return (
        <>
            <Link href="/">
                <Image src="/esports-ftw.png" alt="bg" width={150} height={150} className="m-auto mt-10" />
            </Link>
            <main className="flex flex-col justify-center items-center h-screen">
                <section className="text-center mb-10">
                    <span className="text-xl">Sign up to</span> <br />
                    <h1 className="text-3xl font-bold text-white">Esports FTW</h1>
                </section>

                <form onSubmit={handleSubmit} className="w-80 md:w-full md:px-10 lg:w-[800px] ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            id="name"
                            className="input input-bordered w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="someone@mail.com"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <p className="text-red-500">{emailError}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date Of Birth</span>
                        </label>
                        <input
                            type="date"
                            className="input input-bordered w-full"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="***********"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="***********"
                            className="input input-bordered w-full"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {passwordError && <p className="text-red-500">{passwordError}</p>}
                    </div>

                    <button type="submit" className="w-full bg-white py-2 mt-8 rounded-lg text-black">
                        Sign up
                    </button>
                </form>

                <div className="text-xs my-3">
                    By signing up, you agree to our <span className="underline label-text">Terms</span> and{" "}
                    <span className="underline label-text">Privacy Policy</span>
                </div>

                <div className="mt-5">
                    Already have an account ?
                    <span className="underline label-text">
                        <Link href="/login"> Sign in </Link>
                    </span>
                </div>
            </main>
        </>
    );
}
