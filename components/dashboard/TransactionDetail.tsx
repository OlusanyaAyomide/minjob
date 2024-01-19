import { mockTransactions } from '@/util/constants'
import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Avatar, AvatarFallback } from '../ui/avatar'
import CopyToClipBoard from '../utils/CopyToClipBoard'
import {MdReport} from "react-icons/md"
import {GoGraph} from "react-icons/go"


export default function TransactionDetail(item:typeof mockTransactions[0]) {
    const Info = ({title,content}:{title:string,content:string})=>(
        <div className='border-b py-2 mb-3'>
            <h1 className="text-xs text-shade">{title}</h1>
            <h1 className="font-semibold text-[15px]">{content}</h1>
        </div>
    )

    return (
    <div className='mb-8'> 
        <h1 className="text-base text-center text-main font-medium mb-4">Transaction</h1> 
        <div className="bg-accent  py-2 px-3 mx-10 rounded-md flex">
            <Avatar className='shrink-0 h-12 w-12 bg-white'>
                <AvatarFallback>UT</AvatarFallback>
            </Avatar>
            <div className="grow pl-2">
                <h1>Utilor User</h1>
                <h1 className="text-xs text-shade">{item.category}</h1>
                <h1 className="font-bold text-base">{item.Amount}</h1>
            </div>
        </div>  
        <div className="mt-3 px-3 sm:px-5">
            <Info title='Date' content='Dec 7 2023 at 12:20pm'/> 
            <Info title='Category' content={item.category}/>
            <Info title='Channel' content={item.channel}/>
            <Info title='Status' content={item.status}/>
            <div className='border-b  py-2 mb-3 flex-center justify-between'>
                <div>
                    <h1 className="text-xs text-shade">Refrence</h1>
                    <h1 className="font-semibold">{item.transactionRef}</h1>
                </div>
                <div className='flex-center'>
                    <span className='text-main'>Copy</span>
                    <CopyToClipBoard text={item.transactionRef} className='text-main'/>
                </div>
            </div>
            <button className="mt-4 w-full border-support hover:bg-page max-w-[230px] xs:max-w-[280px] py-6 flex-center rounded-md rounded-tr-2xl px-3 mx-8 border shadow-sm">
                    <span><MdReport className = "text-xl text-red-600"/></span>
                    <span className='ml-2'>Report Transaction</span>
            </button>
            <button className="mt-4 py-6 w-full border-support hover:bg-page max-w-[230px] xs:max-w-[280px] flex-center rounded-md rounded-tr-2xl px-3 mx-8 border shadow-sm">
                <span><GoGraph className = "text-xl text-main"/></span>
                <span className='ml-2'>Download Transaction</span>
            </button>
        </div> 
    </div>
  )
}
