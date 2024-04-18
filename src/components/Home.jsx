import React from 'react'
import {Link} from "react-scroll";


import Typewriter from "typewriter-effect";


const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-gray-900 text-white">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-gray-50 text-lg">Hi, I am</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
                    John Muturi Kibocha
                </h1>
                <div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
                        <span className='mr-2'>I am a</span>
                        <Typewriter
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Web Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("")
                                    .start();


                                typewriter
                                    .typeString("Android Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("")
                                    .start();

                                typewriter
                                    .typeString("Network Engineer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("")
                                    .start();

                                typewriter
                                    .typeString("System Administrator")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("")
                                    .start();

                                typewriter
                                    .typeString("Cyber Security Analyst")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("")
                                    .start();
                            }}
                        />
                    </h2>
                </div>
                <p className="text-gray-300 py-4 leading-8">
                    I am a focused and enthusiastic developer with a keen interest in web development. By comprehensive
                    exposure to the underlying concepts and applying them vividly to various projects, my love for these
                    domains came into being. I am a passionate individual who thrives to build software to solve
                    real-world industry problems.
                </p>
                <div className="mt-4 mx">
                    <button
                        className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
                    >
                        <Link to='contact' smooth={true} duration={500}>Hire Me</Link>
                    </button>

                </div>
                <div className="mt-4">
                    <button
                        className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
                    >
                        <a href='https://spurrow-my.sharepoint.com/:w:/g/personal/john_kibocha_onmicrosoft_com/ESZLib8xjktEqgkJ4oNAAKQBPDKlpCNjaj62ovmpxajfWQ?e=rU0rHq'>Resume (English)</a>

                    </button>
                </div>

                <div className="mt-4">
                    <button
                        className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
                    >
                        <a href='https://spurrow-my.sharepoint.com/:w:/g/personal/john_kibocha_onmicrosoft_com/EeMUG7r5ozFBnfbKe1SkxJIBYhIWPy11snnkzgFMmTo61g?e=zHDcCS'>Resume (Kiswahili)</a>

                    </button>
                </div>

                <div className="mt-4">
                    <button
                        className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
                    >
                        <a href='https://spurrow-my.sharepoint.com/:w:/g/personal/john_kibocha_onmicrosoft_com/EaF4E0jl3j9BrIyqsI4SxkIBH4KeezCk9_1G73lw-9omkg?e=eKgqSy'>Resume (Kikuyu)</a>

                    </button>
                </div>

            </div>
        </div>
    );
}

export default Home;