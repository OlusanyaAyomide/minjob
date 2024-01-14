import { useHomeLayout } from '@/store/useDashBoardLayout'
import { Sheet, SheetContent, SheetOverlay, SheetTrigger } from '../ui/sheet'
import { MdMenu } from "react-icons/md";
import SideLayout from './SideLayout';
import { useRouter } from 'next/router';
import ThemeChanger from '../utils/ThemeChanger';
import { IoIosNotifications } from "react-icons/io";
import { Popover,PopoverTrigger,PopoverContent } from '../ui/popover';
import { Avatar,AvatarFallback,AvatarImage } from '../ui/avatar';
import { FaRegUserCircle } from "react-icons/fa";
import { BsChatRightDotsFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";



import Link from 'next/link';
import { Button } from '../ui/button';



export default function Header() {
const {isExpanded} = useHomeLayout()
const {asPath} = useRouter()
const description  = asPath.replace(/\//g, '')

    return (
        <div className={`fixed shadow-sm  bg-white dark:bg-background padding-x dark:shadow-none  dark:border-b py-1 sm:py-2 flex-center top-0 right-0 w-full  transition-all duration-500 ${!isExpanded?"w-full lg:w-[calc(100%-80px)]":"lg:w-[calc(100%-260px)]"}`}>
            <Sheet>
                <SheetTrigger asChild  className='max-sm:hidden lg:hidden shrink-0 cursor-pointer hover:bg-accent px-1 py-1'>
                    <Button variant={"ghost"} size={"icon"}>
                         <MdMenu  className = "text-shade  text-2xl"/>
                    </Button>
                </SheetTrigger>
                <SheetOverlay className='lg:hidden max-sm:hidden'/>    
                <SheetContent className='w-[260px] px-0 overflow-scroll default-scroll max-sm:hidden lg:hidden bg-deep-black dark:bg-background' side={"left"}>
                    <SideLayout/>
                </SheetContent>
            </Sheet>
            <div className="grow">
                <h1 className="text-center text-[13px] font-medium">
                    {description || "Dashboard"}        
                </h1>
            </div>    
            <div className='flex-center'>
                <ThemeChanger/>
                <IoIosNotifications className = "text-j-purple ml-1 text-2xl"/>
                <Popover>
                    <PopoverTrigger asChild>
                        <div className="flex-center cursor-pointer">
                            <Avatar className='ml-2'>
                                <AvatarFallback>P</AvatarFallback>
                            </Avatar>
                            <GoTriangleDown className = "text-shade -translate-x-[2px] translate-y-[4px] text-lg"/>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className='py-2 px-2 w-[200px]' alignOffset={5} side='bottom' align='end'>
                        <Link href={"/profile"} className='mb-2'>
                            <div className="flex-center">
                                <FaRegUserCircle className = "text-shade text-[22px] " />
                                <span className='ml-2 text-[13px]'>Profile</span>
                            </div>
                        </Link>
                        <Link href={"/support"} className='mb-2'>
                            <div className="flex-center">
                                <BsChatRightDotsFill className = "text-shade text-[22px] " />
                                <span className='ml-2 text-[13px]'>Support</span>
                            </div>
                        </Link>
                        <div className="flex-center">
                            <button>
                                <MdLogout className = "text-shade text-[22px]" />
                            </button>
                            <span className='ml-2 text-[13px]'>LogOut</span>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>   
        </div>
  )
}
