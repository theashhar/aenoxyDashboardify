import React, { useState, useRef, useEffect } from 'react';
// import { MdDarkMode, MdLightMode  } from "react-icons/md";
import UserIcon from './components/UserIcon';
import ProjectBoard from './components/ProjectBoard';

export default function HeroSection() {
  const [projectBoards, setProjectBoards] = useState([<ProjectBoard key={1} />]);
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  const addProjectBoard = () => {
    const newId = projectBoards.length + 1;
    const newProjectBoard = <ProjectBoard key={newId} />;
    setProjectBoards([...projectBoards, newProjectBoard]);
  };

  return (
    <div className='my-14 mx-6 md:mx-10'>
{/* 
        {darkMode? (
          
          <MdDarkMode className='absolute bottom-5 right-10 drop-shadow' color='' size={40} onClick={toggleDarkMode} />
        ) :(
          
          <MdLightMode className='absolute bottom-5 right-10 drop-shadow' color='' size={40} onClick={toggleDarkMode} />
        )
        } */}

      <div className='flex justify-between items-center my-14'>
        <div className='flex justify-center items-center'>
          <div className='h-8 w-8 md:h-10 md:w-10 mr-2'>
            <UserIcon letter='A' />
          </div>
          <h2 className='text-xl md:text-2xl font-bold text-black'>Adam Cooper Team</h2>
        </div>
        <div className='flex items-center justify-center rounded-md border-2 px-3 py-2 bg-black text-white cursor-pointer' onClick={addProjectBoard}>
          <h2 className='text-l font-bold text-white'>New Project</h2>
        </div>
      </div>
      {/* Render all project boards */}
      {projectBoards}
    </div>
  );
}