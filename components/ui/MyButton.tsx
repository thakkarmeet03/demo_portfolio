import React from 'react'

const MyButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string,
    icon: React.ReactNode,
    position: string,
    handleClick?: () => void,
    otherClasses?: string
}) => {
  return (
    <button className={`shadow-[inset_0_0_0_1px_#cbacf9] px-5 py-3 rounded-lg tracking-widest inline-flex gap-2 items-center
    bg-transparent hover:bg-[#cbacf9] text-purple text-xs hover:text-blue-950 font-bold transition duration-300 ${otherClasses}`}>
        {position==='left' && icon}
        {title}
        {position==='right' && icon}
    </button>
  )
}

export default MyButton