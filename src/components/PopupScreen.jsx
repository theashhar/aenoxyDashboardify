import React, { useState } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function PopupScreen({togglePopup, addStoryboardItem, storyBoardName, setStoryBoardName}) {
    // const [storyboardName, setStoryboardName] = useState('');
    const [frameSize, setFrameSize] = useState('Landscape (16:9)');
    const [aiAssistant, setAiAssistant] = useState(false);
    const handleCreateStoryboard = () => {
        addStoryboardItem()
        togglePopup()
        setStoryBoardName(storyBoardName)
        setStoryBoardName('')
    };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/5 w-4/5  lg:w-2/5 bg-white shadow-lg rounded-lg p-10">
        {/* Close Icon */}
        <div className="absolute top-6 right-0 lg:right-10 m-4">
            <AiOutlineCloseCircle color="#333" size={30} onClick={togglePopup} />
        </div>

    <h2 className="text-3xl font-bold mb-4">New Storyboard</h2>
        <div className='flex justify-center flex-col my-4'>
            <h2 className="text-xl font-bold mb-4">Storyboard Name</h2>
            <input
                className=" w-full border-2 border-gray-400 p-2 mb-4 rounded-md bg-transparent placeholder-gray-500"
                type="text"
                placeholder="e.g. AI Character Demo"
                value={storyBoardName}
                onChange={(e) => setStoryBoardName(e.target.value)}
            />
                <h2 className="text-xl font-bold mb-4">Frame Size</h2>
            <select
                className=" w-full border-2 border-gray-400 p-2 mb-4 rounded-md bg-transparent"
                value={frameSize}
                onChange={(e) => setFrameSize(e.target.value)}
            >
                <option>Landscape (16:9)</option>
                <option>Portrait (9:16)</option>
                {/* Add other options here */}
            </select>
        </div>
        <div className='flex justify-center flex-col'>
            <label className="flex items-center mb-4">
                <input
                type="checkbox"
                checked={aiAssistant}
                onChange={() => setAiAssistant(!aiAssistant)}
                />
                <span className="ml-2">AI Assistant</span>
            </label>
            <button
                className="bg-black text-white p-2 rounded-md"
                onClick={handleCreateStoryboard}
            >
                Create Storyboard
            </button>
        </div>

</div>
  )
}
