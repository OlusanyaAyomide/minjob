import { mobileLinks } from '@/util/constants'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button } from '../ui/button'
import { IoMenu } from "react-icons/io5";
import { Drawer,DrawerClose,DrawerContent,DrawerOverlay,DrawerTrigger } from '../ui/drawer';
import SideLayout from './SideLayout';


export default function MobileNav() {
     const {asPath} = useRouter()
     const [isScrollingDown, setIsScrollingDown] = useState(false);
    useEffect(() => {
        let lastScrollTop = window.scrollY;
    
        const handleScroll = () => {
        const currentScrollTop = window.scrollY;
    
        if (currentScrollTop > lastScrollTop) {
          // Scrolling down
          setIsScrollingDown(true);
        } else {
          // Scrolling up
          setIsScrollingDown(false);
        }

        lastScrollTop = currentScrollTop;
        };

      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 

    return (
      <div className={`sm:hidden left-0 w-full z-20 transition-all duration-500 ${!isScrollingDown?"bottom-0":"-bottom-20"} text-white dark:border-t bg-deep-black dark:bg-background flex-center  w-full fixed  justify-between padding-x`}>
          {mobileLinks.map((item,key)=>{
            const Icon = item.Icon
            const isActive = asPath.startsWith(item.link)
            return<Link key={key} href={item.link}>
                <div className={`px-1 flex flex-col items-center py-1 ${isActive?"border-b":""}`}>
                    <Icon className = "text-[22px] text-white"/> 
                    <span className="text-[11px]">{item.name}</span>
                </div>

            </Link>
        })}
        <div className='flex flex-col items-center '>
            <Drawer >
                <DrawerClose className='bg-border'/>
                <DrawerTrigger asChild>
                    <Button variant={"ghost"} size={"icon"}  className='ho hover:bg-dark-hover'>
                        <IoMenu className = "text-2xl text-white"/>
                    </Button>
                </DrawerTrigger>
                <DrawerOverlay className='sm:hidden '/>
                <DrawerContent  className='sm:hidden'>
                    <div className="min-h-[85vh]  max-h-[90vh] overflow-auto default-scroll">
                        <SideLayout isMobile/>
                    </div>

                </DrawerContent>
            </Drawer>

            <span className="text-[11px] -translate-y-[10px]">More</span>
        </div>

      </div>
    )
}
