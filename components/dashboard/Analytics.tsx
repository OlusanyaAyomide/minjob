import React,{useState} from 'react'
import { chartoptions } from '@/util/chartConfig'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler,BarElement} from 'chart.js';
import { Line,Bar } from 'react-chartjs-2'
import CustomButton from '../utils/CustomButton';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
);




export default function Analytics() {
    const [isChart,setIsChart] = useState(true)

    const salesData = [10,25,20,28,32,64,30]
    const jobData = [30,15,28,43,62,14,40]
    const labels = ["Q1","Q2","Q3","Q4","Q5","Q6","Q7"]
    const data ={
        labels,
        datasets:[
        {
            label:"Sales" ,   
            data: salesData,
            lineTension: 0.4,
            borderColor:"#c724b1",
            backgroundColor:isChart?"#c724b11e":"#c724b1"
        },
        {
            label:"Jobs" ,   
            data:jobData,
            lineTension: 0.4,
            borderColor:"#631298",
            backgroundColor:isChart?undefined:"#631298"
        },
        
    ]
    }
  return (
    <div className='mt-16'>
        <h1 className="text-center sm:text-base mb-5 font-medium">Analytics</h1>
        <div className="mt-3 flex items-stretch flex-wrap">
            <div className="w-full  overflow-hidden xl:w-8/12 xl:pr-1">
                <div className="radiate-card pt-[300px] sm:pt-[340px] relative">
                    <div className="h-[300px] sm:h-[340px] absolute top-0 left-0 w-full">
                        {isChart?
                            <Line options={chartoptions} data={data}/>
                        :
                            <Bar options={chartoptions} data={data}/>
                        }
                    </div>
     
                    <div className="mt-3">
                        <CustomButton onClick={()=>{setIsChart((prev=>!prev))}} className='block mx-auto'>
                            View {isChart?"Bar":"Line"} Chart
                        </CustomButton>
                    </div>
                </div>
            </div>
            <div className="w-full xl:w-4/12 xl:pl-2 max-xl:mt-3">
                <div className="radiate-card h-full  flex-wrap max-sm:justify-center xl:justify-center items-center flex xl:flex-col">
                        <div className='h-36 w-36 sm:h-40 sm:w-40 shrink-0  rounded-full  shadow-sm grid place-items-center' style={{background:`conic-gradient(#631298 85%,#02074b1b 85%)`}}>
                            <div className='h-[104px] w-[104px] sm:h-[108px] sm:w-[108px] bg-background rounded-full grid place-items-center font-semibold'>
                            <span className='text-3xl text-main font-bold'>
                                85%
                            </span>
                        </div>    
                    </div>
                    <h1 className='max-sm:mt-2 pl-2 text-lg font-bold xl:pl-0 xl:mt-2'>Overall Perfomance</h1>
                </div>
            </div>
        </div>

    </div>
  )
}
