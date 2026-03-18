import React from 'react'
import NewButton from './ui/NewButton'
import { FaPaperPlane } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="relative pt-20 " id="contact">
        <div className='w-full -mt-40'>
            <img src="/footer-grid.svg" alt="footer-grid" className='w-full opacity-50 h-[600px] object-cover' />
        </div>
        <div className='w-full absolute inset-0'>
            <h1 className="mt-28 mx-auto heading justify-center text-center md:max-w-[45vw]">
                Ready to take your digital presence to <span className="text-purple">the next level ?</span>
            </h1>
            <p className='mt-14 mb-8 text-white-200 text-center md:w-auto max-w-[72vw] mx-auto'>
                Reach out to me and let's discuss how I can help you achieve your goals.</p>
            <a href='mailto:test@gmail.co'>
                <div className='flex justify-center'><NewButton title='Get in Touch' icon={<FaPaperPlane />} position='right'/></div>
            </a>
            <div className="flex mt-10 md:mt-[104px] flex-row md:justify-between justify-center items-center">
                <p className="text-sm font-light hidden md:block">
                © 2026 - made with love by <span className="text-purple">Meet Thakkar</span>
                </p>

                <div className="flex items-center md:gap-5 gap-6">
                {socialMedia.map((info) => (
                    <div
                    key={info.id}
                    className="w-6 h-6 cursor-pointer flex justify-center items-center">
                    <a href={info.link} target='blank'><img src={info.img} alt="icons" width={20} height={20} /></a>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer