import React from 'react'

const NewButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string,
    icon: React.ReactNode,
    position: string,
    handleClick?: () => void,
    otherClasses?: string
}) => {
  return (
    <button onClick={handleClick} className={`border tracking-widest rounded-lg  bg-black-100
    transition-all duration-300 px-5 py-3 font-bold text-xs gap-2 hover:-translate-y-0.5
    border-white/[0.2] text-white hover:bg-gray-900 inline-flex ${otherClasses}`}>
        {position==='left' && icon}
        {title}
        {position==='right' && icon}
    </button>
  )
}

export default NewButton