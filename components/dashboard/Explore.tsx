import React from 'react'
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from "@/components/ui/carousel"
import Image from 'next/image'
import { useHomeLayout } from '@/store/useDashBoardLayout'

const images =["/banner1.jpg","/banner2.jpg","/banner3.jpg","/banner1.jpg","/banner2.jpg","/banner3.jpg"]

export default function Explore() {
    const {isExpanded} = useHomeLayout()
  return (
    <div className='mt-16'>
        <h1 className="text-center sm:text-base mb-3 font-medium">Explore</h1>

        <Carousel className=' overflow-hidden'>
          <CarouselContent className='flex  md:pl-4'>
            {images.map((item,key)=>(
              <CarouselItem key={key} className={`pl-2 md:mr-4 border h-[190px] rounded-md overflow-hidden md:pl-3 md:basis-1/2 relative ${isExpanded?"":"xl:basis-1/3"}`}>
                  <Image className='h-full md:w-full object-cover' src={item} alt={item} fill/>
              </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious  className='left-1 disabled:opacity-30 bottom-14'/>
            <CarouselNext className='right-1 disabled:opacity-30 bottom-14' />
        </Carousel>

    </div>
  )
}
