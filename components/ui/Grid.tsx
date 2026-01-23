import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { GridItems } from '@/data'

const Grid = () => {
  return (
    <section id = "about"> 
        <BentoGrid>
            {GridItems.map ((item) => (
                <BentoGridItem 
                    id = {item.id}
                    key = {item.id}
                    title = {item.title}
                    description = {item.description}
                    className= {item.className}
                    img = {item.img}
                    imgClassName = {item.imgClassName}
                    titleClassName = {item.titleClassName}
                    spareImg = {item.spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid