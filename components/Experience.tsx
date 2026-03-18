import { workExperience } from '@/data'
import React from 'react'

const Experience = () => {
  return (
    <section className="py-20" id="experience">
        <h1 className="heading">
            My <span className="text-purple"> work experience</span>
        </h1>
        <div className="mt-10 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workExperience.map((card) => (
            <div
                key={card.id}
                className="md:col-span-2 flex-1 bg-black-100 shadow-[0_8px_16px_rgb(0_0_0/0.4)] border rounded-2xl border-white/[0.2] text-white hover:bg-gray-900">
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                    <img
                        src={card.thumbnail}
                        alt={card.thumbnail}
                        className="lg:w-32 md:w-20 w-16"
                    />
                    <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                        {card.title}
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                        {card.desc}
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Experience