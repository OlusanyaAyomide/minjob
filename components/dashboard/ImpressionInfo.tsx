import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Button } from '../ui/button'

const durations =["Today","Week","Month"]

export default function ImpressionInfo({className}:{className?:string}) {

    const [duration,setDuration] = useState("Month")
    return (
    <div className={cn("mt-3 sm:mt-6",className)} >
        <div className='radiate-card'>
            <div className="mb-2">
                {durations.map((item,key)=>(
                    <Button onClick={()=>{setDuration(item)}} key={key} className='px-2 mr-1' variant={duration===item?"outline":"ghost"}>{item}</Button>
                ))}
                <div className="flex-center px-1 xs:px-3 my-4">
                    <div className="w-36 h-36 shrink-0 grid place-content-center rounded-full border-j-purple border-[18px]">
                        <div className="mb-1">
                            <h1 className='font-bold text-[22px] text-center'>23,000</h1>
                            <h1 className="text-shade text-center text-[10px] mt-[2px]">
                                {duration==="Today"?"Impressions today":`${duration}ly impression`}
                            </h1>
                        </div>
                    </div>
                    <div className="grow pl-3">
                        <div className="flex-center  mb-1">
                            <div className="rounded-full h-[6px] w-[6px] bg-green-500"></div>
                            <div className="pl-2 text-xs text-shade">24 Completed Task</div>
                        </div>
                        <div className="flex-center  mb-1">
                            <div className="rounded-full h-[6px] w-[6px] bg-blue-500"></div>
                            <div className="pl-2 text-xs text-shade">10 Sales Made</div>
                        </div>
                        <div className="flex-center  mb-1">
                            <div className="rounded-full h-[6px] w-[6px] bg-yellow-500"></div>
                            <div className="pl-2 text-xs text-shade">3 Tasks Pending</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
