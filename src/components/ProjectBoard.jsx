import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineFolderOpen, AiOutlineMore, AiFillCaretDown, AiOutlinePlusCircle, AiOutlineEdit, AiFillCaretUp,   } from "react-icons/ai";
import PopupScreen from './PopupScreen';

export default function ProjectBoard () {
    const [storyboardItems, setStoryboardItems] = useState([<StoryboardItem key={1} />]);
    const [isEditing, setIsEditing] = useState(false);
    const [projectName, setProjectName] = useState('Default Project');
    const projectNameRef = useRef(null);
    const [storyBoardName, setStoryBoardName] = useState('');
    const [isItemsVisible, setIsItemsVisible] = useState(true); // State to track visibility of StoryboardItems
  
    const toggleItemsVisibility = () => {
      setIsItemsVisible(!isItemsVisible);
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };
  
    const addStoryboardItem = () => {
      const newId = storyboardItems.length + 1;
      const newStoryboardItem = <StoryboardItem key={newId} storyBoardName={storyBoardName} />;
      setStoryboardItems([...storyboardItems, newStoryboardItem]);
    };
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleBlur = () => {
      setIsEditing(false);
    };
  
    useEffect(() => {
      if (isEditing) {
        projectNameRef.current.focus();
      }
    }, [isEditing]);
  
    return (
      <div className='w-full h-full rounded-lg bg-white py-8 px-4 lg:px-12 lg:py-12 mb-10'>
        <div className='flex items-start justify-between w-full '>
          <div className='flex '>
            <AiOutlineFolderOpen color='' size={40} />
            <div className='ml-6'>
              {isEditing ? (
                <input
                  ref={projectNameRef}
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  onBlur={handleBlur}
                  className='text-black text-xl border-none outline-none bg-transparent'
                />
              ) : (
                <h1 className='text-black text-xl'>{projectName}</h1>
              )}
              <span className='text-gray-400 text-l'>{storyboardItems.length} Storyboard</span>
            </div>
            {!isEditing && (
              <div className='mt-1 ml-2 cursor-pointer' onClick={handleEditClick}>
                <AiOutlineEdit color='' size={20} />
              </div>
            )}
          </div>
          <div className='flex items-center justify-between w-20'>
            <AiOutlineMore color='' size={25} />
            {isItemsVisible? (
  
              <AiFillCaretUp color='' size={25} onClick={toggleItemsVisibility} />
            ): (
              <AiFillCaretDown color='' size={25} onClick={toggleItemsVisibility} />
  
            )}
          </div>
        </div>
        {/* board */}
        {isItemsVisible && (
          <div className='flex flex-wrap w-full mt-6 justify-center sm:justify-center md:justify-normal'>
            {storyboardItems}
            <AddStoryboardItem
              onClick={togglePopup}
            //  onClick={addStoryboardItem}
            />
          </div>
        )}
        {/* Popup  Section */}
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" onClick={togglePopup}></div>
            {/* Popup */}
            <PopupScreen togglePopup={togglePopup} addStoryboardItem={addStoryboardItem} storyBoardName={storyBoardName} setStoryBoardName={setStoryBoardName} />
  
          </div>
        )}
  
      </div>
    );
  }

  const StoryboardItem = ({storyBoardName}) => {
    return(
      <div className='w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 h-72 border-white border-8 '>
        <div className='w-full h-full bg-white border-gray-200 border-2 rounded-sm'>
          <img src='https://source.unsplash.com/random/?storyboard' alt='cover' className='object-cover h-3/4 w-full rounded-t-sm' />
          <div className='m-2'>
            <h1 className='text-black text-base'>{storyBoardName==null && 'AI Character Demo'}{storyBoardName}</h1>
            <span className='text-gray-400 text-xs'>Updated 21 Mar 24</span>
          </div>
        </div>
      </div>
    );
  }
  
  const AddStoryboardItem = ({ onClick }) => {
    return (
      <div className='w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 h-72 border-white border-8 '>
        <div className='w-full h-full flex justify-center items-center bg-customBg border-gray-200 border-2 rounded-sm cursor-pointer'
         onClick={onClick}>
          <AiOutlinePlusCircle color='#b6b6b6' size={40} />
        </div>
      </div>
    );
  }