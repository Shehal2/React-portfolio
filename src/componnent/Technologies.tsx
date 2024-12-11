import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiDotnet, SiPhp, SiGit, SiMysql, SiPostgresql, SiJetbrains } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';

const Technologies = () => {
    return (
        <section id="tools" className="pb-10">
            <div className="pb-24">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-8">
                    Technologies & Tools
                </h2>
                <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div className="rounded-2xl p-4 bg-gray-100 shadow-md">
                            <RiReactjsLine className='text-7xl text-cyan-400' />
                        </div>
                        <div className="rounded-2xl p-4 bg-gray-100 shadow-md">
                            <SiDotnet className='text-7xl text-indigo-500' />
                        </div>
                        <div className="rounded-2xl p-4 bg-gray-100 shadow-md">
                            <SiPhp className='text-7xl text-green-500' />
                        </div>
                        <div className="rounded-2xl p-4 bg-gray-100 shadow-md">
                            <SiGit className='text-7xl text-red-600' />
                        </div>
                        <div className="rounded-2xl p-4 bg-gray-100 shadow-md">
                            <SiMysql className='text-7xl text-blue-600' />
                        </div>
                        <div className="rounded-2xl p-4 bg-gray-100 shadow-md">
                            <SiPostgresql className='text-7xl text-blue-800' />
                        </div>
                        <div className="rounded-2xl p-4 bg-gray-100 shadow-md">
                            <DiVisualstudio className='text-7xl text-purple-800' />
                        </div>
                        <div className="rounded-2xl p-4 bg-gray-100 shadow-md">
                            <SiJetbrains className='text-7xl text-purple-800' />
                        </div>
                        <div className="rounded-2xl p-4 bg-gray-100 shadow-md">
                            <img
                                src="src/images/visual-studio-code-logo-svgrepo-com.svg"
                                alt="Custom Visual Studio Code"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
