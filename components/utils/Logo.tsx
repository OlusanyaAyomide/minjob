import { cn } from '@/lib/utils';
import React from 'react'
import { PiHandshakeBold } from "react-icons/pi";

export default function Logo({expanded=true,style,className,ngClass}:{expanded?:boolean,style?:string,className?:string,ngClass?:string}) {
  return (
    <div className={cn(`flex flex-center w-[200px]`,className)}>
        <span className=''>
            <PiHandshakeBold className = {cn("text-5xl text-j-purple",ngClass)}/>
        </span>
        {expanded?<span className={cn("text-white text-2xl ml-1",style)}>
            MinJoB
        </span>:null}

    </div>
  )
}
