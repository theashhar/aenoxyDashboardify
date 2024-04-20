import React, { useState } from 'react'
import { AiFillBehanceCircle, AiOutlineSearch, AiOutlineThunderbolt, AiOutlineMenu, AiOutlineCloseCircle  } from "react-icons/ai";
import CircleProgress from './components/CircleProgress';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import default styles
import UserIcon from './components/UserIcon';

export default function Navbar() {
    const [percentage, setPercentage] = useState('87')
    const textPreview = Math.round(percentage / 6.25);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  

  return (
    <div className='bg-white h-24 flex justify-between items-center pl-6 '>
        <div className='justify-between flex items-center ' >
            <AiFillBehanceCircle color='' size={52} />
            <h1 className='hidden md:block md:text-2xl lg:text-3xl font-bold mx-3 '>Project Dashboard</h1>
        </div>
        
        <div className='flex justify-center items-center ' >
            <div className="relative flex items-center justify-center mx-2">
                <AiOutlineSearch  className='absolute top-3 left-3' color='#9BA4B1' size={20} />
                <input 
                    type="text" 
                    placeholder="Search my storyboards" 
                    className="pl-9 py-2 rounded-md border-2 placeholder:text-gray-400 bg-white border-gray-300 focus:border-blue-500 focus:outline-none w-56 md:w-64 lg:w-80 "
                />
            </div>
            <div className="z-10 hidden md:flex w-38 h-14 items-center justify-center rounded-md border-2 pr-2 mx-2 border-sky-200 bg-sky-100 ">
                {/* <CircleProgress maxValue={16} value={4} /> */}
                <div className='w-14 p-2'>
                    <CircularProgressbar
                            value={percentage}
                            text={`${textPreview}`}
                            strokeWidth={14}
                            styles={buildStyles({
                                textSize: '30px',
                                // Colors
                                pathColor: `#39BDF8`,
                                textColor: 'black',
                                trailColor: '#b8e5ff',
                                backgroundColor: '#3e98c7',
                            })} />
                </div>
                <h1 className='font-bold' >Quick Start</h1>
            </div>
            <div className='h-10 w-10 md:h-12 md:w-12 mx-2'>
                <UserIcon letter='A' />
            </div>
            <div className='h-12 w-10 ml-2 hidden bg-black rounded-l-full md:flex justify-center items-center'>
                <AiOutlineThunderbolt className='ml-1' color='white' size={22} />
            </div>

{/* sidebar */}
<AiOutlineMenu className='md:hidden' color='' size={30} onClick={toggleSidebar} />

{isSidebarOpen && (
    <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" onClick={toggleSidebar}></div>

        {/* Sidebar */}
        <div className="fixed top-0 right-0 h-full w-4/5 md:hidden bg-white shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out">
            {/* Close Icon */}
            <div className="absolute top-0 left-0 m-4">
                <AiOutlineCloseCircle color="#333" size={30} onClick={toggleSidebar} />
            </div>

            {/* Sidebar items */}
            <div className="flex flex-col  h-full my-20">                
                <div className="z-12 flex w-38 h-14 items-center justify-center rounded-md border-2 pr-2 mx-4 border-sky-200 bg-sky-100 ">
                    {/* <CircleProgress maxValue={16} value={4} /> */}
                    <div className='w-14 p-2'>
                        <CircularProgressbar
                                value={percentage}
                                text={`${textPreview}`}
                                strokeWidth={14}
                                styles={buildStyles({
                                    textSize: '30px',
                                    // Colors
                                    pathColor: `#39BDF8`,
                                    textColor: 'black',
                                    trailColor: '#b8e5ff',
                                    backgroundColor: '#3e98c7',
                                })} />
                    </div>
                    <h1 className='font-bold' >Quick Start</h1>
                </div>
                <div className='h-12 w-fulls m-4 lg:hidden bg-black rounded-full flex justify-center items-center'>
                <AiOutlineThunderbolt className='ml-1' color='white' size={22} />
            </div>
            </div>
        </div>
    </div>
)}


        </div>        
    </div>
  )
}