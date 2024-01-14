import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import CustomButton from '../utils/CustomButton'
import { Separator } from '../ui/separator'

export default function UserLevel({className}:{className?:string}) {
  return (
    <div className={cn("w-full max-xl:mt-5",className)}>
        <div className="bg-deep-black rounded-lg dark:hover:animate-radiate shaow-md py-4 px-2">
            <div className="mx-auto w-24  h-32 relative">
                <Image src={"/badge.svg"} alt='' fill/>
            </div>
            <h1 className="text-center -mt-2 text-white text-xl font-bold">Junior Poster</h1>
            <div className="mt-10 flex  xl:px-0 md:px-16 sm:px-7 justify-around">
                <div className='px-3'>
                    <h1 className="text-gray-600 text-xs">Date Joined</h1>
                    <h1 className="text-white">24/10/2001</h1>
                </div>
                <div className="px-3">
                    <h1 className='text-gray-600 text-xs'>Ranking</h1>
                    <h1 className="text-white">216</h1>
                </div>
            </div>
            <div className="flex mt-5   xl:px-0 md:px-16 sm:px-7 sm:justify-around flex-col sm:flex-row  xl:flex-col xl:mb-[38px]">
                <CustomButton className='max-sm:mb-3'>Request Payout</CustomButton>   
                <Separator className='bg-gray-200 h-[1px] my-4 xl:block sm:hidden' orientation='horizontal' />
                <CustomButton className='max-sm:mb-3 sm:px-6 sm:ml-4 xl:ml-0'>Share Coins</CustomButton> 
            </div>
        </div>
    </div>
  )
}
