import { useHomeLayout } from '@/store/useDashBoardLayout'
import { useRouter } from 'next/router'
import React from 'react'
import Logo from '../utils/Logo'
import { sideLinks } from '@/util/constants'
import { IoShuffleOutline } from "react-icons/io5";
import { Button } from '../ui/button'
import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { cn } from '@/lib/utils'

export default function SideLayout({canExpand,isMobile}:{canExpand?:boolean,isMobile?:boolean}) {
    const {asPath} = useRouter()
    const {isExpanded:expanded,setIsExpanded} = useHomeLayout()
    const  isExpanded = canExpand?expanded:true
  return (
    <div className={'pt-4 pb-2 padding-x h-full'}>
        <div className="flex-center justify-between">
            <Logo expanded ={isExpanded}  className={isMobile?"ml-3":""}  style={isMobile?"text-foreground":"text-white"}/>
            <Button  onClick={()=>{
                setIsExpanded(!isExpanded)
            }} className={`hover:bg-dark-hover ${!canExpand?"hidden":""} transition-all duration-700 ${isExpanded?'':"translate-y-11 px-1 -translate-x-10 rotate-180 "}`} variant={"ghost"} size={"icon"}>
                <IoShuffleOutline className = "text-white text-3xl"/>
            </Button>
        </div>
       
        <div className={isExpanded?"translate-y-10 transition-all duration-500":"translate-y-20"}>
            {sideLinks.map((item,key)=>{
                const isActive = asPath.startsWith(item.link)
                const Icon  = item.Icon
                
                return(
                    <Link href={item.link} key={key} className={`block transition-all duration-500 ${isMobile?"mb-4":""} ${(isExpanded && !isMobile)?"mb-5":"mb-4"}`}>
                        {isExpanded?
                        <div className={`flex-center h-11 px-2 transition-all duration-500 mb-4 ${isMobile?"hover:bg-accent":"hover:bg-dark-hover"}   rounded-md ${isActive?"bg-j-blue hover:bg-j-purple":""}`}>
                            <Icon className = {` mr-1 ${isMobile?isActive?"text-white text-xl":"text-shade text-xl ":"text-white text-lg"}`}/>
                            <span className={`mr-1 ${isMobile?isActive?"text-white ":"text-foreground ":"text-white"}`}>{item.name}</span>
                        </div>:
                        <HoverCard key={key} openDelay={100} closeDelay={100}>
                            <HoverCardTrigger>
                                <Button variant={"ghost"} asChild className={`block  bg-transparent hover:bg-dark-hover  w-full h-10 ${isActive?"bg-j-blue hover:bg-j-purple":""}`}>
                                    <Icon className="text-3xl text-white hover:text-white"/>
                                </Button>
                                <HoverCardContent sideOffset={10} side='right' align='start' className='py-4 relative z-30 dark:bg-card'>
                                    <span>{item.name}</span>
                                </HoverCardContent>
                            </HoverCardTrigger>
                        </HoverCard>
                    }
                        
                    </Link>
                )
            
            })}
        </div>

    </div>
  )
}
