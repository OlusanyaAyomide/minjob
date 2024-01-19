import React from 'react'
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table"
import { Button } from '../ui/button'
import { mockTransactions } from '@/util/constants'
import { DialogContent, DialogTrigger ,Dialog, DialogClose} from '../ui/dialog'
import { CiFilter   } from "react-icons/ci";
import CloseButton from './CloseButton'
import TransactionDetail from './TransactionDetail'
import { FaArrowUp } from "react-icons/fa6";
import { DivideIcon } from 'lucide-react'
import CustomButton from '../utils/CustomButton'


export default function Recentransaction() {
  return (
    <div className='mt-16 relative'>
        <h1 className="text-center sm:text-base mb-3 font-medium">Recent Transactions</h1>
        <div className="py-4 px-2 shadow-md dark:animate-radiate bg-white dark:bg-deep-black">
            <div className="flex-center justify-between py-4 mb-2 px-2">
                <span className='text-main font-medium sm:text-lg'>Transactions</span>
                <Button className='px-3 flex-center bg-accent sm:px-5' variant={"ghost"} >
                    <span>Filter</span>
                    <CiFilter className = "ml-1 text-xl text-main"/>
                </Button>
            </div>
            <Table>
            <TableHeader className='bg-gradient-to-r from-j-purple to-j-blue  rounded-md py-1'>
                <TableRow className=''>
                    <TableHead className='text-white'>S/N</TableHead>
                    <TableHead className='text-white'>Date</TableHead>
                    <TableHead className='text-white'>Category</TableHead>
                    <TableHead className='max-sm:hidden text-white'>Amount</TableHead>
                    <TableHead className='max-sm:hidden text-white'>Status</TableHead>
                    <TableHead className='text-white'></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {mockTransactions.map((item,key)=>(
                    <TableRow className='border-b border-b-blue-500/20 py-1 hover:bg-page' key={key}>
                        <TableCell className=''>
                            <div className="text-shade grid place-items-center h-8 border-[3px] bg-transparent border-j-purple w-8  shrink-0 rounded-full relative top-4 font-medium">
                                <FaArrowUp className ="text-green-500 text-sm"/>
                            </div>
                            <div className="h-6 w-[2px]"></div>
                        </TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell className='max-sm:hidden'>{item.category}</TableCell>
                        <TableCell>{item.Amount}</TableCell>
                        <TableCell  className={`${item.status === "Success"?"text-green-500":"text-red-500"} max-sm:hidden`}>
                            <span>{item.status}</span>
                        </TableCell>
                        <TableCell >
                            <Dialog>
                                <DialogTrigger asChild className='px-2 mt-1'>
                                    <Button variant={"ghost"} className=' sm:px-3 hover:bg-accent text-shade'>View</Button>
                                </DialogTrigger>
                                <DialogContent className='px-0  min-h-[90vh] max-h-[96vh] overflow-auto default-scroll'>
                                    <div className="flex-center pt-2 px-2">
                                        <DialogClose asChild>
                                            <div>
                                                <CloseButton/>
                                            </div>
                                        </DialogClose>
                                    </div>
                                    <TransactionDetail {...item}/>
                                </DialogContent>
                            </Dialog>                       
                        </TableCell>
                    </TableRow>
                    
                ))}
            </TableBody>
        </Table>
            <div className="absolute h-20 backdrop-blur-sm bottom-0 w-full bg-gradient-to-b from-transparent to-background flex items-end justify-center">
                <CustomButton className='h-8 mb-2'>View All</CustomButton>
            </div>
        </div>

    </div>
  )
}
