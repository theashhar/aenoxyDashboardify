import React from 'react'

export default function UserIcon({letter}) {
  return (
    <div className="flex justify-center items-center h-full w-full border-2 border-black rounded-full bg-gradient-to-r from-yellow-100 to-yellow-500">
      <p className="text-xl md:text-2xl font-bold text-black pb-1">{letter}</p>
    </div>
  )
}
