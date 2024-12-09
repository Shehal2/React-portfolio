import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { SiDotnet } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { SiJetbrains } from 'react-icons/si';

const Technologies = () => {
    return (
        <div className="pb-24">
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400'/>
                </div>
                <div className="rounded-2xl p-4">
                    <SiDotnet className='text-7xl text-indigo-500'/>
                </div>
                <div className="rounded-2xl p-4">
                    <SiPhp className='text-7xl text-green-500'/>
                </div>
                <div className="rounded-2xl p-4">
                    <SiGit className='text-7xl text-red-600'/>
                </div>
                <div className="rounded-2xl p-4">
                    <SiMysql className='text-7xl text-blue-600'/>
                </div>
                <div className="rounded-2xl p-4">
                    <SiPostgresql className='text-7xl text-blue-800'/>
                </div>
                 <div className="rounded-2xl p-4"> 
                    <DiVisualstudio className='text-7xl text-purple-800'/> 
                 </div>
                 <div className="rounded-2xl p-4"> 
                    <SiJetbrains className='text-7xl text-purple-800'/> 
                 </div>
                 <div className="rounded-2xl p-4">
                    <img
                        src="src/images/visual-studio-code-logo-svgrepo-com.svg"
                        alt="Custom Visual Studio Code"
                        className="w-16 h-16 object-contain"
                    />
                </div>
            </div>
        </div>  
    )
}

export default Technologies;
