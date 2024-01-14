import { cn } from '@/lib/utils'
import React from 'react'
import type { IconType } from 'react-icons'
import { Button } from '../ui/button'
import { MdOutlineRefresh } from "react-icons/md";


interface IDashBoardard{
    className?:string
    Icon:IconType
    text:string
    description:string
    style?:string
}

export default function DashBoardCard({className,Icon,style,text,description}:IDashBoardard) {
  return (
    <div  className={cn('w-full max-sm:mb-3 sm:w-6/12',className)}>
      <div className="radiate-card">
        <div className="mb-3">    
          <div className="flex-center justify-between">
              <Icon className={cn('text-j-blue text-3xl sm:text-4xl block shrink-0',style)}/>
              <div className="shrink-0 relative">
                <Button variant={"ghost"} size={"icon"} className='peer'>
                    <MdOutlineRefresh className = "text-xl sm:text-[22px] text-j-blue"/>
                </Button>
                <span className='peer-hover:block absolute -bottom-4 text-shade hidden text-[12px]'>Refresh</span>
              </div>
          </div>         
          <h1 className="mb-6 font-medium text-base">{description}</h1>
        </div>
        <div className="mb-1">
            <h1 className="block text-2xl sm:text-[26px] font-bold">{text}</h1>
            <h1 className='text-shade text-xs'>Last Updated 2mins ago</h1>
          </div>
      </div>
    </div>
  )
}
