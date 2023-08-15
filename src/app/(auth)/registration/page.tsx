import Link from "next/link";
import Image from "next/image";

export default function page() {
    return (
        <>
            <Image src="/esports-ftw.png" alt="bg" width={150} height={150} className="m-auto mt-10" />
            <main className="flex flex-col justify-center items-center h-screen ">

                <section className="text-center mb-10">
                    <span className="text-xl">Sign up to</span> <br />
                    <h1 className="text-3xl font-bold text-white">Esports FTW</h1>
                </section>

                <form className="w-80 md:w-full md:px-10 lg:w-[800px] ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="someone@mail.com" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="John Doe" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="***********" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="***********" className="input input-bordered w-full" />
                    </div>

                    <button className=" w-full bg-white py-2 mt-8 rounded-lg text-black">
                        Sign up
                    </button>
                </form>

                <div className="text-xs my-3">
                    By signing up, you agree to our <span className="underline label-text">Terms</span> and <span className="underline label-text">Privacy Policy</span>
                </div>

                <div className="mt-5">
                    Already have an account ?
                    <span className="underline label-text">
                        <Link href='/login' > Sign in </Link>
                    </span>
                </div>

            </main>
        </>
    )
}
