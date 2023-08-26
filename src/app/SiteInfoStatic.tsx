import React from 'react'

export default function SiteInfoStatic() {
    return (
        <div className="gradient p-5 w-3/4 m-auto rounded-t-lg mt-10">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl md:text-3xl font-semibold text-center my-3 mb-8">
                    Everything about the esports popularity
                </h1>
                <p className="text-center lg:w-[1000px] text-sm md:text-base">
                    Esports FTW is not just another analytical service. We are a
                    team of passionate gamers and esports enthusiasts who are
                    dedicated to exploring the development of esports. Our service
                    is designed to make esports more honest and clear, helping
                    sponsors, organizers, and fans alike to better understand the
                    industry. With our cutting-edge technology and expert analysis,
                    we provide a unique perspective on the world of esports that you
                    won't find anywhere else. Whether you're a casual fan or a
                    seasoned pro, Esports FTW has something for everyone. Join us
                    today and discover the future of esports!
                </p>
                <div className="mt-10 lg:flex gap-3 justify-center items-center">
                    <a href="/">
                        <div
                            className="bg-[#091523] py-3 px-6 rounded-full font-semibold flex justify-center items-center gap-2 opacity-90 hover:cursor-pointer hover:scale-105 transition"
                        >
                            <img className="w-5 inline-block" src="/icons/logo.png" alt="log" />
                            Esports FTW
                        </div>
                    </a>
                    <p className="text-center font-bold text-2xl">=</p>
                    <a
                        href="https://github.com/wnameless/docker-oracle-xe-11g"
                        target="_blank"
                    >
                        <div
                            className="bg-[#091523] py-3 px-6 rounded-full font-semibold flex items-center justify-normal gap-2 opacity-90 hover:cursor-pointer hover:scale-105 transition"
                        >
                            <img
                                className="inline-block h-6 mr-2"
                                src="/icons/oracle.png"
                                alt=""
                            />
                            Oracle 11G
                        </div>
                    </a>
                    <p className="text-center font-bold text-2xl">+</p>
                    <a
                        href="https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-7"
                        target="_blank"
                    >
                        <div
                            className="bg-[#091523] py-3 px-8 rounded-full font-semibold opacity-90 flex items-center justify-center hover:cursor-pointer hover:scale-105 transition"
                        >
                            <img
                                className="inline-block h-6 mr-2"
                                src="/icons/dotnetseven.webp"
                                alt=""
                            />
                            Dot Net 7.0
                        </div>
                    </a>
                    <p className="text-center font-bold text-2xl">+</p>
                    <a href="https://nextjs.org/" target="_blank">
                        <div
                            className="bg-[#091523] py-3 px-8 rounded-full font-semibold opacity-90 flex items-center justify-center hover:cursor-pointer hover:scale-105 transition"
                        >
                            <img
                                className="inline-block w-6 mr-2"
                                src="/icons/nextjs.png"
                                alt=""
                            />
                            NextJS
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
