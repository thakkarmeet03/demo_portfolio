import React from 'react'
import { Spotlight } from './ui/Spotlight'
// import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaDownload } from 'react-icons/fa6';
import NewButton from './ui/NewButton';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>
      <div className="flex h-screen w-full items-center justify-center absolute top-0 left-0 dark:bg-black-100 dark:bg-grid-white/[0.03] bg-white">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white 
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className='flex justify-center relative my-20 z-10 '>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1 className='uppercase tracking-widest text-xs text-blue-100 max-w-80 text-center'>
            This is a demo portfolio
          </h1>
          <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl lg:text-5xl'
            words='Hello, this is Meet Thakkar'
            filter={false}
          />
          <p className='text-center md:tracking-wider text-xs md:text-lg lg:text-xl'>
            an aspiring web developer and a tech enthusiast !
          </p>
          <div className='inline-flex items-center gap-3 my-10'>
            <a href="/cv-template.pdf" target='_blank'>
              <NewButton 
                title='Download CV' position='right'
                icon={<FaDownload />} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero