import { useHomeLayout } from '@/store/useDashBoardLayout'
import React from 'react'
import SideLayout from './SideLayout'
import Header from './Header'
import MobileNav from './MobileNav'
import { cn } from '@/lib/utils'

export default function Layout({children,className}:{children:React.ReactNode,className?:string}) {
    const {isExpanded} = useHomeLayout()
  return (
    <div className='flex max-w-[1600px] mx-auto'>
        <div className={`max-lg:hidden shrink-0  transition-all  duration-500  ${isExpanded?" lg:w-[260px]":"w-[80px]"}`}>
            <div className={`fixed dark:bg-background h-[100vh] bg-deep-black dark:border-r duration-500  default-scroll ${isExpanded?" overflow-auto lg:w-[260px]":"w-[80px]"}`}>
                <SideLayout canExpand/>
            </div>
        </div>
        <div className={"grow transition-all min-h-[200vh] pt-[62px] duration-500 padding-x"}>
            <Header/>
            {children}
            <MobileNav/>
        </div>
    </div>
  )
}
