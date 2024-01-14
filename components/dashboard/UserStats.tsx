import React from 'react'
import { FaWallet } from "react-icons/fa6";
import { BiSolidCoinStack } from "react-icons/bi";
import DashBoardCard from './DashBoardCard';
import { IoMdWallet } from "react-icons/io";
import ImpressionInfo from './ImpressionInfo';
import UserLevel from './UserLevel';

export default function UserStats() {
  return (
  <>
    <div>
        <h1 className="font-medium   text-xl sm:text-[22px] md:text-[24px]">Hi, Adesegun</h1>
        <h1 className="text-[13px]">
            <span>You have</span>
            <span className='font-semibold mx-1 text-j-blue'>21,436</span>
            <span className='mr-1'>Impressions</span>
            <span className='max-sm:hidden'>this month</span>
        </h1>
    </div>
    <div className="mt-3 flex flex-wrap items-stretch">
        <div className='flex flex-wrap max-xl:grow xl:w-8/12'>
            <DashBoardCard Icon={IoMdWallet} description='Available Balance' className='sm:pr-2'  text='$29'/>
            <DashBoardCard Icon={BiSolidCoinStack} description='Total Tokens' style='text-yellow-500 text-2xl' className='sm:pl-2'  text='40'/>
            <ImpressionInfo className='w-full'/>
        </div>
        <div className="w-full  xl:pl-2 xl:w-4/12">
            <UserLevel/>
        </div>

    </div>
  </>

  )
}
